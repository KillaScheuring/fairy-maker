import {useState} from 'react';
import {assetManifest, categoryDisplays, assetDisplays, type Piece} from "../character/assetManifest";
import {layerOrder} from "../character/layerOrder";
import {categorySections} from "../character/categoryOrder.ts";
import {useCharacter} from "../character/CharacterContext";
import {RecoloredSvg} from "./RecoloredSvg.tsx";
import {presetPalettes} from "../character/colorOptions.ts";
import type {ColorRole} from "../character/colorRoles.ts";
import {PaletteDisplay} from "./PaletteDisplay.tsx";

function AssetButton({id, isSelected}: { id: string, isSelected?: boolean }) {
    const {character, selectAsset} = useCharacter();
    const asset = assetManifest.find(item => item.id === id);

    if (!asset) return null;

    const categoryDisplay = categoryDisplays.find(item => item.category === asset.category);
    let baseAssetIds: string[] = [];
    categoryDisplay?.bases.forEach(category => baseAssetIds = [...baseAssetIds, ...(character.selectedAssets[category] || [])])
    const baseAssets = assetManifest.filter(item => baseAssetIds.includes(item.id));

    // Choose the base asset that every thumbnail should display.
    const assetsToRender = [...baseAssets, asset];

    const pieces = assetsToRender.flatMap((item) =>
        item.pieces.map((piece, index) => ({
            ...piece,
            key: `${item.id}-${piece.layer}-${index}`,
        }))
    );

    const layerIndex = new Map(
        layerOrder.map((layer, index) => [layer, index])
    );

    const handleClick = () => {
        if (character.selectedAssets[asset.category].includes(id)) {
            selectAsset(asset.category, [])
        } else {
            selectAsset(asset.category, [id])
        }
    }

    const handleAccessoryClick = () => {
        console.log("asset.category", asset.category)
        let currentSelection = [...character.selectedAssets[asset.category]]
        if (currentSelection.includes(id)) {
            currentSelection = currentSelection.filter(item => item !== id);
        } else {
            currentSelection = [...currentSelection, id]
        }
        selectAsset(asset.category, currentSelection)
    }

    pieces.sort(
        (a: Piece, b: Piece) =>
            (layerIndex.get(a.layer) ?? Infinity) -
            (layerIndex.get(b.layer) ?? Infinity)
    );

    const zoomStyle = {
        ...categoryDisplay?.zoomStyle,
        ...(assetDisplays[id] ?? {}),
    }

    return (
        <div className="asset-card">
            <div className={`asset-image ${isSelected ? 'selected' : ''}`}
                 onClick={asset.category === "accessory" ? handleAccessoryClick : handleClick}>
                <div className="asset-thumbnail">
                    <div className="asset-thumbnail-zoom" style={zoomStyle}>
                        {pieces.map((piece) => (
                            <RecoloredSvg
                                key={piece.key}
                                src={piece.file}
                                className="character-piece"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function CategoryTab({label, onClick, isSelected}: { label: string; onClick?: () => void, isSelected?: boolean }) {
    console.log(isSelected)
    return (
        <button
            className={`${isSelected ? "bg-purple-200 text-black" : "bg-purple-500 text-white"} hover:bg-blue-500 text-xs font-bold md:py-1 py-0 px-2 md:px-2 rounded`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default function AssetPicker() {
    const {selectedAssetIds} = useCharacter();
    const [categoryTab, setCategoryTab] = useState("Hair");
    return (
        <section className="flex h-full min-h-0 flex-col pt-2">
            <div className={"justify-between flex pb-2"}>
                <CategoryTab label={"Palettes"}
                             isSelected={categoryTab === "Palettes"}
                             onClick={() => setCategoryTab("Palettes")}
                />
                {Object.keys(categorySections).map((section) => section !== "Head" && (
                    <CategoryTab label={section}
                                 isSelected={categoryTab === section}
                                 onClick={() => setCategoryTab(section)}
                    />
                ))}
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto">
                {Object.keys(categorySections).map((section) => section !== "Head" && (
                    <div className={`selection-category ${section === categoryTab ? "" : "hidden"}`}>
                        {categorySections[section].map((category) => (
                            <div className="min-h-0 flex-1 overflow-y-auto">
                                <span className={"selection-category"}>{category}</span>
                                <div className={"grid md:grid-cols-4 grid-cols-3 gap-y-5"}>
                                    {assetManifest.filter(item => item.category === category).map(asset => (
                                        <AssetButton id={asset.id} isSelected={selectedAssetIds?.includes(asset.id)}/>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <div className={`selection-category ${categoryTab === "Palettes" ? "" : "hidden"}`}>
                    <span className={"selection-category"}>Palettes</span>
                    <div className={"grid grid-cols-2 gap-3"}>
                        {presetPalettes.map((presetPalette: Record<ColorRole, string>) => (
                            <PaletteDisplay
                                presetPalette={presetPalette}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}