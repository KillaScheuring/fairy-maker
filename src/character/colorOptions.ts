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