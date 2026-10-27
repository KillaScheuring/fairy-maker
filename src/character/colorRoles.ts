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
} as const;

export const colorOrder = [
    "hair",
    "skin",
    "top",
    "bottom",
    "shoes",
]

export type ColorRole = keyof typeof colorRoles;