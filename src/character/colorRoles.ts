export const colorRoles = {
    hairFill: {
        label: "Hair - Fill",
        defaultColor: "#6b3f75",
        inkscapeLabel: "hair - color",
    },
    hairOutline: {
        label: "Hair - Stroke",
        defaultColor: "#6b3f75",
        inkscapeLabel: "hair - outline",
    },
    skinFill: {
        label: "Skin - Fill",
        defaultColor: "#f2c6a0",
        inkscapeLabel: "skin - color",
    },
    skinOutline: {
        label: "Skin - Stroke",
        defaultColor: "#f2c6a0",
        inkscapeLabel: "skin - outline",
    },
    eyesFill: {
        label: "Eyes - Fill",
        defaultColor: "#526B4D",
        inkscapeLabel: "eyes - color",
    },
    eyesOutline: {
        label: "Eyes - Stroke",
        defaultColor: "#526B4D",
        inkscapeLabel: "eyes - outline",
    },
    topFill: {
        label: "Top - Fill",
        defaultColor: "#805a91",
        inkscapeLabel: "top - color",
    },
    topOutline: {
        label: "Top - Stroke",
        defaultColor: "#805a91",
        inkscapeLabel: "top - outline",
    },
    bottomFill: {
        label: "Pants - Fill",
        defaultColor: "#805a91",
        inkscapeLabel: "bottom - color",
    },
    bottomOutline: {
        label: "Pants - Stroke",
        defaultColor: "#805a91",
        inkscapeLabel: "bottom - outline",
    },
    shoesFill: {
        label: "Shoes - Fill",
        defaultColor: "#805a91",
        inkscapeLabel: "shoes - color",
    },
    shoesOutline: {
        label: "Shoes - Stroke",
        defaultColor: "#805a91",
        inkscapeLabel: "shoes - outline",
    },
    wingsFill: {
        label: "Wings - Fill",
        defaultColor: "#805a91",
        inkscapeLabel: "wings - fill",
    },
    wingsOutline: {
        label: "Wings - Stroke",
        defaultColor: "#805a91",
        inkscapeLabel: "wings - outline",
    },
} as const;

export const colorOrder = [
    "hair",
    "skin",
    "eyes",
    "wings",
    "top",
    "bottom",
    "shoes",
]

export type ColorRole = keyof typeof colorRoles;

export function isColorRole(key: string): key is ColorRole {
    return key in colorRoles;
}