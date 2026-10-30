import {type Layer} from "./layerOrder.ts";
import {type Category} from "./categoryOrder.ts";

export type CategoryDisplay = {
    category: Category;
    bases: Category[];
    zoomStyle: {
        transform: string,
        transformOrigin: string
    }
}

export type Piece = {
    key?: string;
    file: string;
    layer: Layer;
}

export type Asset = {
    id: string;
    name: string;
    category: Category;
    pieces: Piece[];
    base?: string;
    palette?: string;
};

export const assetManifest: Asset[] = [
    {
        id: "belt",
        category: "accessory",
        name: "Belt",
        pieces: [
            {
                "file": "/assets/accessories/belt/belt.svg",
                "layer": "accessoriesFront"
            },
            {
                "file": "/assets/accessories/belt/belt_needles.svg",
                "layer": "accessoriesFront"
            },
            {
                "file": "/assets/accessories/belt/belt_scissors.svg",
                "layer": "accessoriesFront"
            }
        ]
    },
    {
        id: "left_hand_knit_swatch",
        name: "Left Hand Swatch",
        category: "accessory",
        pieces: [
            {
                file: "/assets/accessories/left_hand/left_hand_knit_swatch.svg",
                layer: "accessoriesFront",
            },
        ],
        palette: "swatch",
    },
    {
        id: "left_hand_knit_swatch_tangled",
        name: "Left Hand Swatch (Tangled)",
        category: "accessory",
        pieces: [
            {
                file: "/assets/accessories/left_hand/left_hand_knit_swatch.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/left_hand/left_hand_yarn_tangle.svg",
                layer: "accessoriesFront",
            },
        ],
        palette: "swatch",
    },
    {
        id: "left_hand_drop_spindle",
        name: "Drop Spindle",
        category: "accessory",
        pieces: [
            {
                file: "/assets/accessories/left_hand/left_hand_drop_spindle.svg",
                layer: "accessoriesFront",
            },
        ],
        palette: "yarn",
    },
    {
        id: "left_hand_clipboard",
        name: "Clipboard",
        category: "accessory",
        pieces: [
            {
                file: "/assets/accessories/left_hand/left_hand_clipboard.svg",
                layer: "accessoriesFront",
            },
        ],
        palette: "yarn",
    },
    {
        id: "right_hand_quill",
        name: "Quill",
        category: "accessory",
        pieces: [
            {
                file: "/assets/accessories/right_hand/right_hand_quill.svg",
                layer: "accessoriesFront",
            },
        ],
        palette: "yarn",
    },
    {
        id: "satchel_open",
        name: "Satchel (Open)",
        category: "accessory",
        pieces: [
            {
                file: "/assets/accessories/satchel/satchel_back.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/satchel/satchel_front.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/satchel/satchel_right.svg",
                layer: "accessoriesFront",
            },
        ]
    },
    {
        id: "satchel_closed",
        name: "Satchel (Closed)",
        category: "accessory",
        pieces: [
            {
                file: "/assets/accessories/satchel/satchel_back.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/satchel/satchel_front.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/satchel/satchel_top.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/satchel/satchel_right.svg",
                layer: "accessoriesFront",
            },
        ]
    },
    {
        id: "satchel_w_yarn",
        name: "Satchel with Yarn (Single)",
        category: "accessory",
        pieces: [
            {
                file: "/assets/accessories/satchel/satchel_back.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/satchel/satchel_yarn_03.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/satchel/satchel_front.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/satchel/satchel_right.svg",
                layer: "accessoriesFront",
            },
        ],
        palette: "yarn_balls"
    },
    {
        id: "satchel_w_yarn_full",
        name: "Satchel with Yarn (Full)",
        category: "accessory",
        pieces: [
            {
                file: "/assets/accessories/satchel/satchel_back.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/satchel/satchel_yarn_01.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/satchel/satchel_yarn_02.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/satchel/satchel_yarn_03.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/satchel/satchel_yarn_04.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/satchel/satchel_front.svg",
                layer: "accessoriesFront",
            },
            {
                file: "/assets/accessories/satchel/satchel_right.svg",
                layer: "accessoriesFront",
            },
        ],
        palette: "yarn_balls"
    },
    {
        id: "satchel_tangled",
        name: "Satchel Yarn Tangle",
        category: "accessory",
        pieces: [
            {
                file: "/assets/accessories/satchel/satchel_yarn_tangle.svg",
                layer: "accessoriesFront",
            },
        ],
        palette: "yarn_balls"
    },
    {
        id: "satchel_yarn_strand",
        name: "Yarn Strand",
        category: "accessory",
        pieces: [
            {
                file: "/assets/accessories/satchel/satchel_yarn_strand.svg",
                layer: "accessoriesFront",
            },
        ]
    },
    {
        id: "yarn_pile",
        name: "Yarn Pile",
        category: "accessory",
        pieces: [
            {
                file: "/assets/accessories/yarn_pile.svg",
                layer: "accessoriesFront",
            },
        ],
        palette: "yarn_balls"
    },
    {
        id: "knit_pile",
        name: "Knit Pile",
        category: "accessory",
        pieces: [
            {
                file: "/assets/accessories/knit_pile.svg",
                layer: "accessoriesFront",
            },
        ],
        palette: "knit_swatch"
    },
    {
        id: "spinning_wheel",
        name: "Spinning Wheel",
        category: "accessory",
        pieces: [
            {
                file: "/assets/accessories/spinning_wheel.svg",
                layer: "accessoriesFront",
            },
        ],
        palette: "knit_swatch"
    },
    {
        id: "background_01",
        name: "Plain Background",
        category: "background",
        pieces: [
            {
                file: "/assets/backgrounds/background_01.svg",
                layer: "background",
            },
        ],
        palette: "background",
    },
    {
        id: "arms_01",
        name: "Straight Arms",
        category: "arms",
        pieces: [
            {
                file: "/assets/body/arms_01.svg",
                layer: "body",
            },
        ],
        palette: "skin"
    },
    {
        id: "arms_02",
        name: "Crossed Arms",
        category: "arms",
        pieces: [
            {
                file: "/assets/body/arms_02.svg",
                layer: "armsFront",
            },
        ],
        palette: "skin"
    },
    {
        id: "ears_01",
        name: "Elf Ears",
        category: "ears",
        pieces: [
            {
                file: "/assets/body/ear_01_left.svg",
                layer: "face",
            },
            {
                file: "/assets/body/ear_01_right.svg",
                layer: "face",
            },
        ],
        palette: "skin"
    },
    {
        id: "eyes_01",
        name: "Round Eyes",
        category: "eyes",
        pieces: [
            {
                file: "/assets/body/eyes_01.svg",
                layer: "face",
            },
        ],
        palette: "eyes"
    },
    {
        id: "eyebrows_01",
        name: "Round Eyebrows",
        category: "eyebrows",
        pieces: [
            {
                file: "/assets/body/eyebrows_01.svg",
                layer: "face",
            },
        ],
        palette: "eyes"
    },
    {
        id: "head_01",
        name: "Round Head",
        category: "head",
        pieces: [
            {
                file: "/assets/body/head_01.svg",
                layer: "head",
            },
        ],
        palette: "skin"
    },
    {
        id: "hat_01",
        name: "Acorn",
        category: "accessory",
        pieces: [
            {
                file: "/assets/clothes/hat_01.svg",
                layer: "accessoriesFront",
            },
        ]
    },
    {
        id: "hat_02",
        name: "Thimble",
        category: "accessory",
        pieces: [
            {
                file: "/assets/clothes/hat_02.svg",
                layer: "accessoriesFront",
            },
        ]
    },
    {
        id: "hat_03",
        name: "Millinery Tea",
        category: "accessory",
        pieces: [
            {
                file: "/assets/clothes/hat_03.svg",
                layer: "accessoriesFront",
            },
        ]
    },
    {
        id: "bottoms_01",
        name: "Long Skirt (Slit)",
        category: "bottoms",
        pieces: [
            {
                file: "/assets/clothes/back/bottoms_01.svg",
                layer: "clothesBack",
            },
            {
                file: "/assets/clothes/front/bottoms_01.svg",
                layer: "clothesFront",
            },
        ],
        palette: "bottoms"
    },
    {
        id: "bottoms_02",
        name: "Long Skirt",
        category: "bottoms",
        pieces: [
            {
                file: "/assets/clothes/front/bottoms_02.svg",
                layer: "clothesFront",
            },
        ],
        palette: "bottoms"
    },
    {
        id: "bottoms_03",
        name: "Leafy Skirt",
        category: "bottoms",
        pieces: [
            {
                file: "/assets/clothes/front/bottoms_03.svg",
                layer: "clothesFront",
            },
        ],
        palette: "bottoms"
    },
    {
        id: "bottoms_04",
        name: "Slim Skirt",
        category: "bottoms",
        pieces: [
            {
                file: "/assets/clothes/front/bottoms_04.svg",
                layer: "clothesFront",
            },
        ],
        palette: "bottoms"
    },
    {
        id: "bottoms_05",
        name: "Long Stripy Skirt",
        category: "bottoms",
        pieces: [
            {
                file: "/assets/clothes/front/bottoms_05.svg",
                layer: "clothesFront",
            },
        ],
        palette: "bottoms"
    },
    {
        id: "sleeves_01",
        name: "Sheer",
        category: "sleeves",
        pieces: [
            {
                file: "/assets/clothes/front/sleeves_01.svg",
                layer: "clothesFront",
            },
        ],
        palette: "sleeves"
    },
    {
        id: "sleeves_02",
        name: "Medieval",
        category: "sleeves",
        pieces: [
            {
                file: "/assets/clothes/front/sleeves_02.svg",
                layer: "clothesFront",
            },
            {
                file: "/assets/clothes/back/sleeves_02.svg",
                layer: "clothesBack",
            },
        ],
        palette: "sleeves"
    },
    {
        id: "shoes_01",
        name: "Plain",
        category: "shoes",
        pieces: [
            {
                file: "/assets/clothes/front/shoes_01.svg",
                layer: "shoesFront",
            },
        ],
        palette: "shoes"
    },
    {
        id: "shoes_02",
        name: "Ballet",
        category: "shoes",
        pieces: [
            {
                file: "/assets/clothes/front/shoes_02.svg",
                layer: "shoesFront",
            },
        ],
        palette: "shoes"
    },
    {
        id: "top_01",
        name: "Cross Strapped",
        category: "top",
        pieces: [
            {
                file: "/assets/clothes/front/top_01.svg",
                layer: "clothesFront",
            },
        ],
        palette: "top"
    },
    {
        id: "top_02",
        name: "Off the Shoulder",
        category: "top",
        pieces: [
            {
                file: "/assets/clothes/front/top_02.svg",
                layer: "clothesFront",
            },
        ],
        palette: "top"
    },
    // {
    //     id: "top_03",
    //     name: "Poofy",
    //     category: "top",
    //     pieces: [
    //         {
    //             file: "/assets/clothes/front/top_03.svg",
    //             layer: "clothesFront",
    //         },
    //     ],
    //     palette: "top"
    // },
    {
        id: "top_04",
        name: "Corset",
        category: "top",
        pieces: [
            {
                file: "/assets/clothes/front/top_04.svg",
                layer: "clothesFront",
            },
        ],
        palette: "top"
    },
    {
        id: "underwear_01",
        name: "Leggings",
        category: "underwear",
        pieces: [
            {
                file: "/assets/clothes/front/underwear_01.svg",
                layer: "underwear",
            },
        ],
        palette: "underwear"
    },
    {
        id: "hair_01",
        name: "Puffs",
        category: "hair",
        pieces: [
            {
                file: "/assets/hair/back/hair_01.svg",
                layer: "hairBack",
            },
        ],
        palette: "hair"
    },
    {
        id: "hair_02",
        name: "Braid",
        category: "hair",
        pieces: [
            {
                file: "/assets/hair/back/hair_02.svg",
                layer: "hairBack",
            },
            {
                file: "/assets/hair/front/hair_02.svg",
                layer: "hairFront",
            },
        ],
        base: "head_01",
        palette: "hair"
    },
    {
        id: "hair_03",
        name: "Dual Braids",
        category: "hair",
        pieces: [
            {
                file: "/assets/hair/back/hair_03.svg",
                layer: "hairBack",
            },
        ],
        palette: "hair"
    },
    {
        id: "hair_04",
        name: "Bun",
        category: "hair",
        pieces: [
            {
                file: "/assets/hair/back/hair_04.svg",
                layer: "hairBack",
            },
        ],
        palette: "hair"
    },
    {
        id: "hair_05",
        name: "Floof",
        category: "hair",
        pieces: [
            {
                file: "/assets/hair/back/hair_05.svg",
                layer: "hairBack",
            },
        ],
        palette: "hair"
    },
    {
        id: "bangs_01",
        name: "Curtain",
        category: "bangs",
        pieces: [
            {
                file: "/assets/hair/front/bangs_01.svg",
                layer: "hairFront",
            },
        ],
        palette: "hair"
    },
    {
        id: "bangs_02",
        name: "Straight",
        category: "bangs",
        pieces: [
            {
                file: "/assets/hair/front/bangs_02.svg",
                layer: "hairFront",
            },
        ],
        palette: "hair"
    },
    {
        id: "bangs_03",
        name: "Curly",
        category: "bangs",
        pieces: [
            {
                file: "/assets/hair/front/bangs_03.svg",
                layer: "hairFront",
            },
        ],
        palette: "hair"
    },
    {
        id: "body_01",
        name: "Default",
        category: "body",
        pieces: [
            {
                file: "/assets/body/body_base_01.svg",
                layer: "body",
            },
        ],
        palette: "skin"
    },
    {
        id: "wings_01",
        name: "Monarch",
        category: "wings",
        pieces: [
            {
                file: "/assets/body/wings_01.svg",
                layer: "wings",
            },
        ],
        palette: "wings"
    },
    {
        id: "wings_02",
        name: "Maple",
        category: "wings",
        pieces: [
            {
                file: "/assets/body/wings_02.svg",
                layer: "wings",
            },
        ],
        palette: "wings"
    },
    {
        id: "wings_03",
        name: "Fairy",
        category: "wings",
        pieces: [
            {
                file: "/assets/body/wings_03.svg",
                layer: "wings",
            },
        ],
        palette: "wings"
    },
    {
        id: "wings_04",
        name: "Koi",
        category: "wings",
        pieces: [
            {
                file: "/assets/body/wings_04.svg",
                layer: "wings",
            },
        ],
        palette: "wings"
    },
];

export const categoryDisplays: CategoryDisplay[] = [
    {
        category: "hair",
        bases: ["head", "bangs", "ears"],
        zoomStyle: {
            transform: "scale(4)",
            transformOrigin: "50% 20%"
        }
    },
    {
        category: "arms",
        bases: ["body", "head"],
        zoomStyle: {
            transform: "scale(4)",
            transformOrigin: "50% 40%"
        }
    },
    {
        category: "bangs",
        bases: ["head", "hair", "ears"],
        zoomStyle: {
            transform: "scale(4)",
            transformOrigin: "50% 20%"
        }
    },
    {
        category: "head",
        bases: ["eyes", "eyebrows", "ears"],
        zoomStyle: {
            transform: "scale(4)",
            transformOrigin: "50% 20%"
        }
    },
    {
        category: "eyes",
        bases: ["head", "eyebrows", "ears"],
        zoomStyle: {
            transform: "scale(4)",
            transformOrigin: "50% 20%"
        }
    },
    {
        category: "eyebrows",
        bases: ["head", "eyes", "ears"],
        zoomStyle: {
            transform: "scale(4)",
            transformOrigin: "50% 20%"
        }
    },
    {
        category: "ears",
        bases: ["head", "eyebrows", "eyes"],
        zoomStyle: {
            transform: "scale(4)",
            transformOrigin: "50% 20%"
        }
    },
    {
        category: "underwear",
        bases: ["body", "arms"],
        zoomStyle: {
            transform: "scale(2.5)",
            transformOrigin: "50% 75%"
        }
    },
    {
        category: "top",
        bases: ["body", "arms", "bottoms", "underwear", "head"],
        zoomStyle: {
            transform: "scale(4)",
            transformOrigin: "50% 40%"
        }
    },
    {
        category: "bottoms",
        bases: ["body", "arms", "top", "underwear"],
        zoomStyle: {
            transform: "scale(2.5)",
            transformOrigin: "50% 75%"
        }
    },
    {
        category: "sleeves",
        bases: ["body", "arms", "head", "top", "bottoms"],
        zoomStyle: {
            transform: "scale(2.5)",
            transformOrigin: "50% 50%"
        }
    },
    {
        category: "wings",
        bases: ["body", "arms", "head"],
        zoomStyle: {
            transform: "scale(2)",
            transformOrigin: "50% 40%"
        }
    },
    {
        category: "shoes",
        bases: ["body"],
        zoomStyle: {
            transform: "scale(3)",
            transformOrigin: "50% 80%"
        }
    },
    {
        category: "body",
        bases: ["arms", "head"],
        zoomStyle: {
            transform: "scale(2.5)",
            transformOrigin: "50% 50%"
        }
    },
    {
        category: "accessory",
        bases: [],
        zoomStyle: {
            transform: "scale(3)",
            transformOrigin: "50% 50%"
        }
    },
]

export const assetDisplays: Record<string, {transform: string; transformOrigin: string}> = {
    hat_01: {
        transform: "scale(3)",
        transformOrigin: "50% 15%"
    },
    hat_02: {
        transform: "scale(3)",
        transformOrigin: "50% 15%"
    },
    hat_03: {
        transform: "scale(3)",
        transformOrigin: "50% 15%"
    },
    yarn_pile: {
        transform: "scale(3)",
        transformOrigin: "25% 85%"
    },
    knit_pile: {
        transform: "scale(3)",
        transformOrigin: "25% 85%"
    },
    left_hand_knit_swatch: {
        transform: "scale(7.8)",
        transformOrigin: "38% 63%"
    },
    left_hand_knit_swatch_tangled: {
        transform: "scale(7.8)",
        transformOrigin: "38% 63%"
    },
    left_hand_drop_spindle: {
        transform: "scale(7.8)",
        transformOrigin: "38% 60%"
    },
}