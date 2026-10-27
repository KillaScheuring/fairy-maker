
import { useState } from "react";
import { useCharacter } from "../character/CharacterContext";
import {
    downloadPng,
    exportCharacterSvg,
} from "../character/exportCharacterSvg";

export function ExportCharacterButton() {
    const { character, selectedAssetIds } = useCharacter();
    const [exporting, setExporting] = useState(false);
    const [, setError] = useState<string | null>(null);

    async function handleExport() {
        setExporting(true);
        setError(null);

        try {
            const svg = await exportCharacterSvg(
                selectedAssetIds,
                character.colors,
            );
            await downloadPng(svg, "my-fairy.png");
            // downloadSvg(svg, "my-fairy.svg");
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong while exporting.",
            );
        } finally {
            setExporting(false);
        }
    }

    return (
        <button
            onClick={handleExport}
            disabled={exporting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className={"fill-current w-4 h-4 mr-2"} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                </g>
            </svg>
            <span>Export</span>
        </button>
    );
}
