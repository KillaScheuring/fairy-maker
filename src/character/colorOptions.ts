import type {ColorRole} from "./colorRoles.ts";

export const hairFills = [
    "#5C2B05",
    "#8F563E",
    "#977961",
    "#BF5841",
    "#D7C2C2",
    "#3B270C",
    "#795D32",
    "#E5C8A9",
    "#34354f",
    "#bd7189"
];

export const hairOutlines = [
    "#3D1C03",
    "#613725",
    "#69513F",
    "#853A2B",
    "#AE8C6B",
    "#251807",
    "#503C20",
    "#202136",
    "#82455b",
    "#A18A8D"
];

export const skinFills = [
    "#8d5524",
    "#f2c6a0",
    "#c68642",
    "#e0ac69",
    "#f1c27d"
];

export const skinOutlines = [
    "#603719",
    "#8F572C",
    "#A8733F",
    "#b5805d",
    "#B88A50"
];

// https://www.color-hex.com/color-palette/1038642
// https://www.color-hex.com/color-palette/4617
// https://www.color-hex.com/color-palette/10120
export const eyeColors = [
    "#170600",
    "#634e34",
    "#8a5814",
    "#3d671d",
    "#638b76",
    "#81badd",
    "#9d8bc4",
    "#71518F",
    "#989696"
];

// ChatGPT
export const clothingColors = [
    "#B96F50",
    "#E7A36F",
    "#D6A64F",
    "#d6b36d",
    "#78865A",
    "#526B4D",
    "#A4B49A",
    "#7e9c8a",
    "#C5E0DE",
    "#386F70",
    "#39465f",
    "#535B83",
    "#899DD1",
    "#A9B2C3",
    "#5f587a",
    "#8875A9",
    "#71518F",
    "#805a91",
    "#A18AB8",
    "#70415F",
    "#C77D91",
    "#e9b9c6"
] as const;

export const clothingOutlines = [
    "#824832",
    "#AD7045",
    "#8b6025",
    "#98712F",
    "#505A3B",
    "#354832",
    "#718467",
    "#496b5b",
    "#83AEAA",
    "#244B4C",
    "#222c40",
    "#363C5B",
    "#596FA3",
    "#727E94",
    "#40334f",
    "#4C3268",
    "#5D4B7D",
    "#50365f",
    "#715A88",
    "#482940",
    "#914F63",
    "#b66d83"
];

export const wingsColors = [
    "#E9B9C6",
    "#C5E0DE",
    "#535B83",
    "#B96F50",
    "#526B4D",
    "#A8A1BF",
    "#F1C27D",
    "#34354F",
]

export const wingOutlines = [
    "#70415F",
    "#386F70",
    "#C5E0DE",
    "#F1C27D",
    "#C77D91",
    "#71518F",
    "#78865A",
    "#BD7189",
]

export const colorPalettes = {
    hairFill: hairFills,
    hairOutline: hairOutlines,
    skinFill: skinFills,
    skinOutline: skinOutlines,
    eyesFill: eyeColors,
    eyesOutline: skinOutlines,
    topFill: clothingColors,
    topOutline: clothingOutlines,
    bottomFill: clothingColors,
    bottomOutline: clothingOutlines,
    shoesFill: clothingColors,
    shoesOutline: clothingOutlines,
    wingsFill: wingsColors,
    wingsOutline: wingOutlines,
}

export const presetPalettes: Record<ColorRole, string>[] = [
    {
        hairFill: "#bf5841",
        skinFill: "#f2c6a0",
        eyesFill: "#3d671d",
        topFill: "#386f70",
        bottomFill: "#c77d91",
        shoesFill: "#c77d91",
        hairOutline: "#5c2b05",
        skinOutline: "#B88668",
        eyesOutline: "#170600",
        topOutline: "#535b83",
        bottomOutline: "#70415f",
        shoesOutline: "#70415f",
        wingsFill: "#E9B9C6",
        wingsOutline: "#70415F",
    },
    {
        hairFill: "#3B270C",
        skinFill: "#e0ac69",
        eyesFill: "#170600",
        topFill: "#71518F",
        bottomFill: "#A18AB8",
        shoesFill: "#8875a9",
        hairOutline: "#3b270c",
        skinOutline: "#A8733F",
        eyesOutline: "#170600",
        topOutline: "#535b83",
        bottomOutline: "#535b83",
        shoesOutline: "#535b83",
        wingsFill: "#E9B9C6",
        wingsOutline: "#70415F",
    },
    {
        hairFill: "#bd7189",
        skinFill: "#f2c6a0",
        eyesFill: "#638b76",
        topFill: "#e9b9c6",
        bottomFill: "#7e9c8a",
        shoesFill: "#d6b36d",
        hairOutline: "#82455b",
        skinOutline: "#b5805d",
        eyesOutline: "#b5805d",
        topOutline: "#b66d83",
        bottomOutline: "#496b5b",
        shoesOutline: "#8b6025",
        wingsFill: "#E9B9C6",
        wingsOutline: "#70415F",
    },
    {
        hairFill: "#34354f",
        skinFill: "#f2c6a0",
        eyesFill: "#9d8bc4",
        topFill: "#805a91",
        bottomFill: "#39465f",
        shoesFill: "#5f587a",
        hairOutline: "#202136",
        skinOutline: "#b5805d",
        eyesOutline: "#b5805d",
        topOutline: "#50365f",
        bottomOutline: "#222c40",
        shoesOutline: "#40334f",
        wingsFill: "#E9B9C6",
        wingsOutline: "#70415F",
    }
]
