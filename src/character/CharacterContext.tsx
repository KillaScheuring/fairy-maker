
import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";
import {categoryOrder} from "./categoryOrder.ts";
import {assetManifest} from "./assetManifest.ts";
import {colorOrder, type ColorRole} from "./colorRoles.ts";
import {
    eyeColors,
    clothingColors,
    hairFills,
    skinFills,
    hairOutlines,
    skinOutlines,
    clothingOutlines, wingsColors, wingOutlines, presetPalettes
} from "./colorOptions.ts";

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
    setPalette: (palette: Record<ColorRole, string>) => void;
    randomizeAssets: () => void;
    randomizeColors: () => void;
    exportAssetJson: () => void;
    importAssetJson: () => void;
};

const defaultCharacter: CharacterState = {
    selectedAssets: {
        body: ["body_01"],
        hair: ["hair_01"],
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
        wings: ["wings_02"],
        background: ["background_01"],
    },
    colors: presetPalettes[2],
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

    function setPalette(palette: Record<ColorRole, string>) {
        setCharacter((current) => {
            const newState = {...current};
            newState.colors = palette
            newState.colorUpdated = !current.colorUpdated
            return ({...newState})
        });
    }

    function randomizeAssets() {
        const selectedAssets: Record<string, string[]> = {};
        categoryOrder.forEach(category => {
            if (["arms", "accessory"].includes(category)) return;
            if (["underwear", "shoes", "sleeves", "wings"].includes(category)) {
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
        let index = 0;
        colorOrder.forEach(color => {
            switch (color) {
                case "hair":
                    index = Math.floor(Math.random() * hairFills.length);
                    selectedColors["hairFill"] = hairFills[index];
                    selectedColors["hairOutline"] = hairOutlines[index];
                    break;
                case "skin":
                    index = Math.floor(Math.random() * skinFills.length)
                    selectedColors["skinFill"] = skinFills[index]
                    selectedColors["skinOutline"] = skinOutlines[index]
                    break;
                case "eyes":
                    index = Math.floor(Math.random() * eyeColors.length)
                    selectedColors["eyesFill"] = eyeColors[index]
                    selectedColors["eyesOutline"] = selectedColors["skinOutline"]
                    break;
                case "wings":
                    index = Math.floor(Math.random() * wingsColors.length)
                    selectedColors["wingsFill"] = wingsColors[index]
                    selectedColors["wingsOutline"] = wingOutlines[index]
                    break;
                default:
                    index = Math.floor(Math.random() * clothingColors.length)
                    selectedColors[color+"Fill"] = clothingColors[index];
                    selectedColors[color+"Outline"] = clothingOutlines[index];
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
            setColor, setPalette, selectAsset,
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
