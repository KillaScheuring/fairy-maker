
export const categoryOrder = [
    "head",
    "ears",
    "eyes",
    "eyebrows",
    "bangs",
    "hair",
    "top",
    "bottoms",
    "sleeves",
    "underwear",
    "shoes",
    "accessory",
    "body",
    "arms",
    "wings",
    "background"
] as const;

export const categorySections: Record<string, Category[]> = {
    "Head": [
        // "head",
        // "ears",
        // "eyes",
        // "eyebrows",
    ],
    "Body": ["body", "arms", "wings"],
    "Hair": ["bangs", "hair"],
    "Clothes": [
        "top",
        "sleeves",
        "bottoms",
        "underwear",
        "shoes"
    ],
    "Accessories": ["accessory"]
}

export type Category = (typeof categoryOrder)[number];
