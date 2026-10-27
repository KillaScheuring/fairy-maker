import { useCharacter } from "../character/CharacterContext";
import {ExportCharacterButton} from "./CharacterExport.tsx";

export default function OptionButtons() {
    const { randomizeAssets, randomizeColors } = useCharacter();

    return (
        <section className="grid grid-cols-3 gap-3">
            <button
                onClick={() => randomizeAssets()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
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
                <span>Assets</span>
            </button>
            <button
                onClick={() => randomizeColors()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
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
                <span>Colors</span>
            </button>
            <ExportCharacterButton/>
        </section>
    );
}
