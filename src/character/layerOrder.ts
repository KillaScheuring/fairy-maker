
export const layerOrder = [
    "background",
    "wings",
    "hairBack",
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
