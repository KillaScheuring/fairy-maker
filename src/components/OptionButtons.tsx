import {useState} from "react";
import { useCharacter } from "../character/CharacterContext";
import {downloadPng, exportCharacterSvg} from "../character/exportCharacterSvg.ts";

const icons = {
    "shuffle": (
        <svg className={"fill-current w-4 h-4 mr-2"} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M21.924 6.617a.997.997 0 0 0-.217-.324l-3-3a1 1 0 1 0-1.414 1.414L18.586 6h-3.321a5 5 0 0 0-4.288 2.428l-3.67 6.115A3 3 0 0 1 4.736 16H3a1 1 0 1 0 0 2h1.735a5 5 0 0 0 4.288-2.428l3.67-6.115A3 3 0 0 1 15.264 8h3.32l-1.292 1.293a1 1 0 0 0 1.414 1.414l3-3A.997.997 0 0 0 22 7m-.076-.383a.996.996 0 0 1 .076.38l-.076-.38z"></path>
                <path
                    d="M21.706 17.708l-2.999 3a1 1 0 0 1-1.414-1.415L18.586 18h-3.321a5 5 0 0 1-4.288-2.428l-3.67-6.115A3 3 0 0 0 4.736 8H3a1 1 0 0 1 0-2h1.735a5 5 0 0 1 4.288 2.428l3.67 6.115A3 3 0 0 0 15.264 16h3.32l-1.292-1.293a1 1 0 0 1 1.414-1.414l3 3c.195.194.292.45.293.704V17a.997.997 0 0 1-.294.708z"></path>
            </g>
        </svg>
    ),
    "paste": (
        <svg className={"w-4 h-4 mr-2"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"/>
        </svg>
    ),
    "copy": (
        <svg className={"w-4 h-4 mr-2"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5"
             stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"/>
        </svg>
    ),
    "download": (
        <svg className={"fill-current w-4 h-4 mr-2"} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </g>
        </svg>
    )
}

function OptionButton({icon, label, onClick, disabled}: {icon: string; label: string, onClick: () => void, disabled?: boolean}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 text-xs rounded inline-flex justify-center items-center">
            {icons[icon]}
            <span>{label}</span>
        </button>
    )
}

export default function OptionButtons() {
    const { character, selectedAssetIds, randomizeAssets, randomizeColors, exportAssetJson, importAssetJson } = useCharacter();
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
        <section className="grid md:grid-cols-3 gap-2 md:p-0 p-2">
            <OptionButton onClick={() => randomizeAssets()} icon={"shuffle"} label={"Assets"}/>
            <OptionButton onClick={() => randomizeColors()} icon={"shuffle"} label={"Colors"}/>
            <OptionButton onClick={() => handleExport()} icon={"download"} label={"Export"} disabled={exporting}/>
            <div className="hidden md:block"></div>
            <OptionButton onClick={() => importAssetJson()} icon={"paste"} label={"JSON"}/>
            <OptionButton onClick={() => exportAssetJson()} icon={"copy"} label={"JSON"}/>
        </section>
    );
}
