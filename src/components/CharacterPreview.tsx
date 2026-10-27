
import  "react";
import { assetManifest } from "../character/assetManifest";
import { layerOrder } from "../character/layerOrder";
import {useCharacter} from "../character/CharacterContext.tsx";
import {RecoloredSvg} from "./RecoloredSvg.tsx";

export default function CharacterPreview() {
    const { character } = useCharacter();

    const selectedAssetIds = Object.values(character.selectedAssets).flat();
    const selectedAssets = assetManifest.filter((asset) =>
        selectedAssetIds.includes(asset.id)
    );

    const layerIndex = new Map(
        layerOrder.map((layer, index) => [layer, index])
    );

    const pieces = selectedAssets.flatMap((asset) =>
        asset.pieces.map((piece, index) => ({
            ...piece,
            key: `${asset.id}-${piece.layer}-${index}`,
        }))
    );

    pieces.sort(
        (a, b) =>
            (layerIndex.get(a.layer) ?? Infinity) -
            (layerIndex.get(b.layer) ?? Infinity)
    );

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                aspectRatio: "2 / 3",
                overflow: "hidden",
                backgroundColor: "white",
            }}
        >
            {pieces.map((piece) => (
                <RecoloredSvg
                    key={piece.key}
                    src={piece.file}
                    className="character-piece"
                />
            ))}
        </div>
    );
}
