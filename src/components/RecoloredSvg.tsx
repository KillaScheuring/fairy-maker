
import { useEffect, useState } from "react";
import { colorRoles, type ColorRole } from "../character/colorRoles";
import { useCharacter } from "../character/CharacterContext";

type RecoloredSvgProps = {
    src: string;
    className?: string;
    alt?: string;
};

type SvgTemplate = {
    document: Document;
    gradientIds: Partial<Record<ColorRole, string>>;
    roles: ColorRole[];
};

// Shared by every RecoloredSvg instance.
const svgCache = new Map<string, Promise<SvgTemplate>>();

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

function getSvgTemplate(src: string): Promise<SvgTemplate> {
    const cached = svgCache.get(src);
    if (cached) return cached;

    const promise = (async (): Promise<SvgTemplate> => {
        const response = await fetch(src);

        if (!response.ok) {
            throw new Error(`Failed to load SVG: ${src}`);
        }

        const svgText = await response.text();
        const document = new DOMParser().parseFromString(
            svgText,
            "image/svg+xml",
        );

        if (document.querySelector("parsererror")) {
            throw new Error(`Invalid SVG: ${src}`);
        }

        const gradients = [
            ...Array.from(
                document.getElementsByTagNameNS(
                    SVG_NAMESPACE,
                    "linearGradient",
                ),
            ),
            ...Array.from(
                document.getElementsByTagNameNS(
                    SVG_NAMESPACE,
                    "radialGradient",
                ),
            ),
        ];

        const gradientIds: Partial<Record<ColorRole, string>> = {};

        for (const [role, config] of Object.entries(colorRoles) as [
            ColorRole,
            (typeof colorRoles)[ColorRole],
        ][]) {
            const gradient = gradients.find((element) =>
                Array.from(element.attributes).some(
                    (attribute) =>
                        attribute.localName === "label" &&
                        attribute.value === config.inkscapeLabel,
                ),
            );

            const id = gradient?.getAttribute("id");

            if (id) {
                gradientIds[role] = id;
            }
        }

        return {
            document,
            gradientIds,
            roles: Object.keys(gradientIds) as ColorRole[],
        };
    })();

    svgCache.set(src, promise);

    // Allow failed requests to be retried.
    void promise.catch(() => {
        if (svgCache.get(src) === promise) {
            svgCache.delete(src);
        }
    });

    return promise;
}

function recolorSvg(
    template: SvgTemplate,
    colors: Record<string, string>,
): string {
    // Never mutate the cached template.
    const document = template.document.cloneNode(true) as Document;

    const gradients = [
        ...Array.from(
            document.getElementsByTagNameNS(
                SVG_NAMESPACE,
                "linearGradient",
            ),
        ),
        ...Array.from(
            document.getElementsByTagNameNS(
                SVG_NAMESPACE,
                "radialGradient",
            ),
        ),
    ];

    const gradientsById = new Map(
        gradients.map((gradient) => [
            gradient.getAttribute("id"),
            gradient,
        ]),
    );

    for (const role of template.roles) {
        const id = template.gradientIds[role];
        const gradient = id ? gradientsById.get(id) : undefined;
        const color = colors[role];

        if (!gradient || !color) continue;

        gradient.querySelectorAll("stop").forEach((stop) => {
            const style = stop.getAttribute("style");

            if (style) {
                stop.setAttribute(
                    "style",
                    style.replace(
                        /stop-color\s*:\s*[^;]+/i,
                        `stop-color:${color}`,
                    ),
                );
            }

            stop.setAttribute("stop-color", color);
        });
    }

    return new XMLSerializer().serializeToString(document);
}

export function RecoloredSvg({
                                 src,
                                 className,
                                 alt = "",
                             }: RecoloredSvgProps) {
    const { character } = useCharacter();
    const colors = character.colors;

    const [template, setTemplate] = useState<{
        src: string;
        value: SvgTemplate;
    } | null>(null);

    const [imageUrl, setImageUrl] = useState<string>();

    // Load each SVG template once, shared across component instances.
    useEffect(() => {
        let active = true;

        setTemplate(null);
        setImageUrl(undefined);

        void getSvgTemplate(src)
            .then((value) => {
                if (active) {
                    setTemplate({ src, value });
                }
            })
            .catch((error) => {
                if (active) {
                    console.error("Unable to load SVG:", error);
                }
            });

        return () => {
            active = false;
        };
    }, [src]);

    // Only changes to colors used by this SVG trigger recoloring.
    const currentTemplate =
        template?.src === src ? template.value : undefined;

    const colorSignature = currentTemplate
        ? currentTemplate.roles
            .map((role) => `${role}:${colors[role] ?? ""}`)
            .join("|")
        : "";

    useEffect(() => {
        if (!currentTemplate) return;

        const updatedSvg = recolorSvg(currentTemplate, colors);
        const blob = new Blob([updatedSvg], {
            type: "image/svg+xml;charset=utf-8",
        });

        const url = URL.createObjectURL(blob);
        setImageUrl(url);

        return () => {
            URL.revokeObjectURL(url);
        };
        // colorSignature represents exactly the colors this SVG uses.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [src, currentTemplate, colorSignature]);

    if (!imageUrl) return null;

    return <img src={imageUrl} className={className} alt={alt} />;
}
