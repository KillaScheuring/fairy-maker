
export const layerOrder = [
    "background",
    "hairBack",
    "wings",
    "accessoriesBack",
    "clothesBack",
    "body",
    "head",
    "face",
    "eyes",
    "underwear",
    "shoesFront",
    "clothesFront",
    "armsFront",
    "hairFront",
    "accessoriesFront",
] as const;

export type Layer = (typeof layerOrder)[number];
