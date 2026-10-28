import {colorPalettes} from "../character/colorOptions.ts";
import {useCharacter} from "../character/CharacterContext.tsx";
import type {ColorRole} from "../character/colorRoles.ts";

type SplitColorCardProps = {
    title: string;
    fillRole: ColorRole;
    outlineRole: ColorRole;
};

export function SplitColorCard({
                                   title,
                                   fillRole,
                                   outlineRole,
                               }: SplitColorCardProps) {
    const { character, setColor } = useCharacter();
    const fillColor = character.colors[fillRole];
    const outlineColor = character.colors[outlineRole];
    return (
        <div className="rounded-xl border border-gray-200 p-2 shadow-sm">
            <div className="flex md:h-4 sm:h-6 overflow-hidden">
                {/* Fill color: left half */}
                <label
                    className="relative flex-1 cursor-pointer"
                    title={`Change ${title.toLowerCase()} fill`}
                >
                    <span
                        className="absolute inset-0"
                        style={{backgroundColor: fillColor}}
                    />
                    <input
                        type="color"
                        value={fillColor}
                        onChange={(event) => setColor(fillRole, event.target.value)}
                        aria-label={`${title} fill color`}
                        className="absolute inset-0 px-3 h-full w-1/4 cursor-pointer opacity-0"
                        list={`${fillRole}-preset-colors`}
                    />

                    <datalist id={`${fillRole}-preset-colors`}>
                        {colorPalettes[fillRole].map((color: string) => (
                            <option value={color}/>
                        ))}
                    </datalist>
                </label>

                {/* Outline color: right half */}
                <label
                    className="relative flex-1 cursor-pointer"
                    title={`Change ${title.toLowerCase()} outline`}
                >
                    <span
                        className="absolute inset-0"
                        style={{backgroundColor: outlineColor}}
                    />
                    <input
                        type="color"
                        value={outlineColor}
                        onChange={(event) => setColor(outlineRole, event.target.value)}
                        aria-label={`${title} outline color`}
                        className="absolute inset-0 px-3 h-full w-1/4 cursor-pointer opacity-0"
                        list={`${outlineRole}-preset-colors`}
                    />

                    <datalist id={`${outlineRole}-preset-colors`}>
                        {colorPalettes[outlineRole].map((color: string) => (
                            <option value={color}/>
                        ))}
                    </datalist>
                </label>
                <h3 className="ms-2 md:text-xs font-medium capitalize w-1/2">
                    {title}
                </h3>
            </div>
        </div>
    );
}
