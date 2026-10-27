import { useEffect, useState } from "react";
import { colorRoles, type ColorRole } from "../character/colorRoles";
import { useCharacter } from "../character/CharacterContext";

type RecoloredSvgProps = {
    src: string;
    className?: string;
    alt?: string;
};

export function RecoloredSvg({
                                 src,
                                 className,
                                 alt = "",
                             }: RecoloredSvgProps) {
    const { character } = useCharacter();
    const [imageUrl, setImageUrl] = useState<string>();

    const colors = character.colors;

    useEffect(() => {
        const controller = new AbortController();
        let objectUrl: string | undefined;

        async function recolorSvg() {
            try {
                const response = await fetch(src, {
                    signal: controller.signal,
                });

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

                for (const [role, config] of Object.entries(colorRoles) as [
                    ColorRole,
                    (typeof colorRoles)[ColorRole],
                ][]) {
                    const color = colors[role];

                    // Find the single-color Inkscape gradient by its label.
                    const gradient = Array.from(
                        document.getElementsByTagNameNS(
                            "http://www.w3.org/2000/svg",
                            "linearGradient",
                        ),
                    ).find((element) => {
                        const label = Array.from(element.attributes).find(
                            (attribute) =>
                                attribute.localName === "label" &&
                                attribute.value === config.inkscapeLabel,
                        );

                        return Boolean(label);
                    });

                    if (!gradient) continue;

                    // Recolor every stop, supporting future multi-stop gradients too.
                    gradient.querySelectorAll("stop").forEach((stop) => {
                        const style = stop.getAttribute("style");

                        if (style) {
                            const updatedStyle = style.replace(
                                /stop-color\s*:\s*[^;]+/i,
                                `stop-color:${color}`,
                            );
                            stop.setAttribute("style", updatedStyle);
                        }

                        stop.setAttribute("stop-color", color);
                    });
                }

                if (controller.signal.aborted) return;

                const updatedSvg = new XMLSerializer().serializeToString(document);
                const blob = new Blob([updatedSvg], {
                    type: "image/svg+xml;charset=utf-8",
                });

                objectUrl = URL.createObjectURL(blob);
                setImageUrl(objectUrl);
            } catch (error) {
                if (!controller.signal.aborted) {
                    console.error("Unable to recolor SVG:", error);
                }
            }
        }

        void recolorSvg();

        return () => {
            controller.abort();
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
    }, [src, character.colorUpdated]);

    if (!imageUrl) return null;

    return <img src={imageUrl} className={className} alt={alt} />;
}