// https://www.color-hex.com/color-palette/547
export const skintones = [
    "#8d5524",
    "#c68642",
    "#e0ac69",
    "#f1c27d",
    "#ffdbac",
];

// https://www.etsy.com/listing/1010392857/basic-hair-color-palette-hex-codes-ipad
export const hairTones = [
    "#3B270C",
    "#795D32",
    "#E5C8A9",
    "#5C2B05",
    "#8F563E",
    "#BF5841",
    "#977961",
    "#D7C2C2",
];

export const hairStroke = "#795D32";

// https://www.color-hex.com/color-palette/1038642
// https://www.color-hex.com/color-palette/4617
// https://www.color-hex.com/color-palette/10120
export const eyeColors = [
    "#81badd",
    "#989696",
    "#634e34",
    "#3d671d",
    "#170600",
    "#8a5814",
    "#71518F",
]

// ChatGPT
export const clothingColors = [
    "#78865A",
    "#526B4D",
    "#A4B49A",
    "#386F70",
    "#C77D91",
    "#A18AB8",
    "#8875A9",
    "#899DD1",
    "#D6A64F",
    "#B96F50",
    "#E7A36F",
    "#A9B2C3",
    "#535B83",
    "#71518F",
    "#70415F",
    "#C5E0DE"
] as const;

export const colorPalettes = {
    hairFill: hairTones,
    hairOutline: hairTones,
    skinFill: skintones,
    skinOutline: skintones,
    eyesFill: eyeColors,
    eyesOutline: skintones,
    topFill: clothingColors,
    topOutline: clothingColors,
    bottomFill: clothingColors,
    bottomOutline: clothingColors,
    shoesFill: clothingColors,
    shoesOutline: clothingColors,
}

export const presetPalettes = [
    {
        hairFill: "#bf5841",
        skinFill: "#ffdbac",
        eyesFill: "#3d671d",
        topFill: "#386f70",
        bottomFill: "#c77d91",
        shoesFill: "#c77d91",
        hairOutline: "#5c2b05",
        skinOutline: "#c68642",
        eyesOutline: "#170600",
        topOutline: "#535b83",
        bottomOutline: "#70415f",
        shoesOutline: "#70415f"
    },
    {
        hairFill: "#3B270C",
        skinFill: "#f1c27d",
        eyesFill: "#170600",
        topFill: "#71518F",
        bottomFill: "#A18AB8",
        shoesFill: "#8875a9",
        hairOutline: "#3b270c",
        skinOutline: "#8d5524",
        eyesOutline: "#170600",
        topOutline: "#535b83",
        bottomOutline: "#535b83",
        shoesOutline: "#535b83"
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
        eyesOutline: "#426451",
        topOutline: "#b66d83",
        bottomOutline: "#496b5b",
        shoesOutline: "#8b6025",
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
        eyesOutline: "#4e365f",
        topOutline: "#50365f",
        bottomOutline: "#222c40",
        shoesOutline: "#40334f",
    }
]
