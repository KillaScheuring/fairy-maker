
import { assetManifest } from "./assetManifest";
import { layerOrder } from "./layerOrder";
import { colorRoles } from "./colorRoles";

type ExportColors = Record<string, string>;

const SVG_NS = "http://www.w3.org/2000/svg";
const XLINK_NS = "http://www.w3.org/1999/xlink";

function recolorSvg(
    svg: SVGSVGElement,
    colors: ExportColors,
) {
    const gradients = [
        ...Array.from(
            svg.getElementsByTagNameNS(SVG_NS, "linearGradient"),
        ),
        ...Array.from(
            svg.getElementsByTagNameNS(SVG_NS, "radialGradient"),
        ),
    ];

    for (const gradient of gradients) {
        const label = Array.from(gradient.attributes).find(
            (attribute) => attribute.localName === "label",
        )?.value;

        const role = Object.entries(colorRoles).find(
            ([, config]) => config.inkscapeLabel === label,
        )?.[0];

        if (!role || !colors[role]) continue;

        for (const stop of Array.from(
            gradient.getElementsByTagNameNS(SVG_NS, "stop"),
        )) {
            stop.setAttribute("stop-color", colors[role]);

            // Inkscape often stores the actual color in an inline style.
            const style = stop.getAttribute("style");

            if (style) {
                stop.setAttribute(
                    "style",
                    style.replace(
                        /stop-color\s*:\s*[^;]+/gi,
                        `stop-color:${colors[role]}`,
                    ),
                );
            }
        }
    }
}

function namespaceIds(svg: SVGSVGElement, prefix: string) {
    const elements = [
        svg,
        ...Array.from(svg.querySelectorAll("*")),
    ];

    const idMap = new Map<string, string>();

    // Create unique IDs for every piece's definitions.
    for (const element of elements) {
        const id = element.getAttribute("id");

        if (id) {
            const newId = `${prefix}-${id}`;
            idMap.set(id, newId);
            element.setAttribute("id", newId);
        }
    }

    // Update references such as url(#gradient), href="#clipPath".
    for (const element of elements) {
        for (const attribute of Array.from(element.attributes)) {
            let value = attribute.value;

            value = value.replace(
                /url\(\s*(['"]?)#([^)'"\s]+)\1\s*\)/g,
                (match, quote: string, id: string) =>
                    idMap.has(id)
                        ? `url(${quote}#${idMap.get(id)}${quote})`
                        : match,
            );

            if (
                (attribute.localName === "href") &&
                value.startsWith("#")
            ) {
                const id = value.slice(1);
                if (idMap.has(id)) value = `#${idMap.get(id)}`;
            }

            element.setAttributeNS(
                attribute.namespaceURI,
                attribute.name,
                value,
            );
        }
    }
}

function parseSvg(source: string): SVGSVGElement {
    const document = new DOMParser().parseFromString(
        source,
        "image/svg+xml",
    );

    if (document.querySelector("parsererror")) {
        throw new Error("An SVG asset could not be parsed.");
    }

    const svg = document.documentElement;

    if (svg.localName !== "svg") {
        throw new Error("An asset does not contain an SVG root.");
    }

    return svg as unknown as SVGSVGElement;
}

export async function exportCharacterSvg(
    selectedIds: string[] | null,
    colors: ExportColors,
): Promise<string> {

    if (!selectedIds) throw new Error("No assets selected");
    const selected = assetManifest.filter((asset) =>
        selectedIds.includes(asset.id),
    );

    const pieces = selected.flatMap((asset) =>
        asset.pieces.map((piece) => ({
            ...piece,
            assetId: asset.id,
        })),
    );

    const layerIndex = new Map(
        layerOrder.map((layer, index) => [layer, index]),
    );

    pieces.sort(
        (a, b) =>
            (layerIndex.get(a.layer) ?? Infinity) -
            (layerIndex.get(b.layer) ?? Infinity),
    );

    if (pieces.length === 0) {
        throw new Error("Select at least one asset before exporting.");
    }

    const sources = await Promise.all(
        pieces.map(async (piece) => {
            const response = await fetch(piece.file);

            if (!response.ok) {
                throw new Error(`Failed to load SVG: ${piece.file}`);
            }

            return {
                ...piece,
                source: await response.text(),
            };
        }),
    );

    const parsedPieces = sources.map((piece, index) => {
        const svg = parseSvg(piece.source);

        recolorSvg(svg, colors);
        namespaceIds(svg, `piece${index}`);

        return svg;
    });

    // const firstSvg = parsedPieces[0];
    const output = document.createElementNS(SVG_NS, "svg");

    output.setAttribute("xmlns", SVG_NS);
    output.setAttributeNS(
        "http://www.w3.org/2000/xmlns/",
        "xmlns:xlink",
        XLINK_NS,
    );

    // All character pieces should share the same coordinate system.
    // const viewBox = firstSvg.getAttribute("viewBox");

    // if (viewBox) {
    //     output.setAttribute("viewBox", viewBox);
    // } else {
    //     output.setAttribute("width", firstSvg.getAttribute("width") ?? "512");
    //     output.setAttribute("height", firstSvg.getAttribute("height") ?? "512");
    // }
    output.setAttribute("width", "449.55002");
    output.setAttribute("height", "362.96082");

    // Preserve each SVG's definitions and artwork in layer order.
    for (const svg of parsedPieces) {
        for (const child of Array.from(svg.childNodes)) {
            output.appendChild(document.importNode(child, true));
        }
    }

    return new XMLSerializer().serializeToString(output);
}

export function downloadSvg(svgText: string, filename = "fairy.svg") {
    const blob = new Blob([svgText], {
        type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(url);
}


export async function downloadPng(
    svgText: string,
    filename = "my-fairy.png",
) {
    const width = 1700;
    const height = 1372;

    const blob = new Blob([svgText], {
        type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    try {
        const image = new Image();

        await new Promise<void>((resolve, reject) => {
            image.onload = () => resolve();
            image.onerror = () =>
                reject(new Error("Failed to render the character SVG."));

            image.src = url;
        });

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext("2d");

        if (!context) {
            throw new Error("Could not create the PNG canvas.");
        }

        context.drawImage(image, 0, 0, width, height);

        const pngBlob = await new Promise<Blob>((resolve, reject) => {
            canvas.toBlob((result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(new Error("Failed to create the PNG file."));
                }
            }, "image/png");
        });

        const pngUrl = URL.createObjectURL(pngBlob);

        try {
            const link = document.createElement("a");
            link.href = pngUrl;
            link.download = filename;
            link.click();
        } finally {
            URL.revokeObjectURL(pngUrl);
        }
    } finally {
        URL.revokeObjectURL(url);
    }
}

