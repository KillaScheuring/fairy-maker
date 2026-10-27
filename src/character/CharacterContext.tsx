
import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";
import {categoryOrder} from "./categoryOrder.ts";
import {assetManifest} from "./assetManifest.ts";
import {colorOrder} from "./colorRoles.ts";
import {eyeColors, clothingColors, hairTones, skintones} from "./colorOptions.ts";

type CharacterState = {
    selectedAssets: Record<string, string[]>;
    colors: Record<string, string>;
colorUpdated: boolean;
};

type CharacterContextValue = {
    character: CharacterState;
    selectAsset: (category: string, assetIds: string[]) => void;
    selectedAssetIds: string[] | null;
    setColor: (role: string, color: string) => void;
    randomizeAssets: () => void;
    randomizeColors: () => void;
    exportAssetJson: () => void;
    importAssetJson: () => void;
};

const defaultCharacter: CharacterState = {
    selectedAssets: {
        body: ["body_01"],
        hair: ["hair_05"],
        accessory: [],
        eyebrows: ["eyebrows_01"],
        bangs: ["bangs_02"],
        shoes: ["shoes_02"],
        bottoms: ["bottoms_01"],
        underwear: [],
        sleeves: [],
        top: ["top_01"],
        arms: ["arms_01"],
        head: ["head_01"],
        ears: ["ears_01"],
        eyes: ["eyes_01"],
        background: ["background_01"],
    },
    colors: {
        hairFill: "#6b3f75",
        skinFill: "#f2c6a0",
        eyesFill: "#170600",
        topFill: "#527c9a",
        bottomFill: "#805a91",
        shoesFill: "#805a91",
        hairOutline: "#764934",
        skinOutline: "#764934",
        eyesOutline: "#170600",
        topOutline: "#764934",
        bottomOutline: "#764934",
        shoesOutline: "#764934",
    },
    colorUpdated: true
};

const CharacterContext = createContext<CharacterContextValue | null>(null);

export function CharacterProvider({children,}: {
    children: ReactNode;
}) {
    const [character, setCharacter] = useState<CharacterState>(defaultCharacter);
    const selectedAssetIds = Object.values(character.selectedAssets).flat().filter(item => !!item);

    function selectAsset(category: string, assetIds: string[]) {
        setCharacter((current) => {
            const newState = {...current};
            newState.selectedAssets[category] = assetIds
            return ({...newState})
        });
    }

    function setColor(role: string, color: string) {
        setCharacter((current) => {
            const newState = {...current};
            newState.colors[role] = color
            newState.colorUpdated = !newState.colorUpdated
            return ({...newState})
        });
    }

    function randomizeAssets() {
        const selectedAssets: Record<string, string[]> = {};
        categoryOrder.forEach(category => {
            if (["arms", "accessory"].includes(category)) return;
            if (["underwear", "shoes", "sleeves"].includes(category)) {
                if (Math.floor(Math.random() * 100) < 25) {
                    selectedAssets[category] = []
                    return
                }
            }
            const categoryAssets = assetManifest.filter(asset => asset.category === category);
            const randomAsset = categoryAssets[Math.floor(Math.random() * categoryAssets.length)];
            selectedAssets[category] = [randomAsset.id]
        })
        setCharacter((current) => {
            const newState = {...current};
            newState.selectedAssets = {...newState.selectedAssets, ...selectedAssets};
            return ({...newState})
        });
    }

    function randomizeColors() {
        const selectedColors: Record<string, string> = {};
        colorOrder.forEach(color => {
            switch (color) {
                case "hair":
                    selectedColors["hairFill"] = hairTones[Math.floor(Math.random() * hairTones.length)]
                    selectedColors["hairOutline"] = hairTones[0]
                    break;
                case "skin":
                    selectedColors["skinFill"] = skintones[Math.floor(Math.random() * skintones.length)]
                    selectedColors["skinOutline"] = skintones[0]
                    break;
                case "eyes":
                    selectedColors["eyesFill"] = eyeColors[Math.floor(Math.random() * eyeColors.length)]
                    break;
                default:
                    selectedColors[color+"Fill"] = clothingColors[Math.floor(Math.random() * clothingColors.length)];
                    selectedColors[color+"Outline"] = "#526B4D";
            }
        });
        setCharacter((current) => {
            const newState = {...current};
            newState.colors = {...newState.colors, ...selectedColors};
            newState.colorUpdated = !newState.colorUpdated
            return ({...newState})
        });
    }

    function exportAssetJson() {
        navigator.clipboard.writeText(JSON.stringify(character));
        alert("Copied to clipboard");
    }

    async function importAssetJson() {
        const characterJson = await navigator.clipboard.readText();
        setCharacter((current) => {
            try {
                const newState = JSON.parse(characterJson);
                newState.colorUpdated = !current.colorUpdated
                return ({...newState})
            }
            catch {
                alert("Error importing clipboard");
            }
        });
        alert("Pasted from clipboard");
    }

    return (
        <CharacterContext.Provider value={{
            character,
            selectedAssetIds,
            setColor, selectAsset,
            randomizeAssets, randomizeColors,
            exportAssetJson, importAssetJson
        }}>
            {children}
        </CharacterContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCharacter() {
    const context = useContext(CharacterContext);

    if (!context) {
        throw new Error(
            "useCharacter must be used inside CharacterProvider"
        );
    }

    return context;
}
