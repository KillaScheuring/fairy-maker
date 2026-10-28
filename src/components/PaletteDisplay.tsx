import {useCharacter} from "../character/CharacterContext.tsx";
import {type ColorRole, colorRoles, isColorRole} from "../character/colorRoles.ts";

type SplitColorCardProps = {
    presetPalette: Record<ColorRole, string>;
};

export function PaletteDisplay({presetPalette}: SplitColorCardProps) {
    const { setPalette } = useCharacter();
    return (
        <div className="rounded-xl border border-gray-200 p-3 shadow-sm">
            <div className="grid grid-cols-4 gap-1 overflow-hidden"
                onClick={() => setPalette(presetPalette)}
            >
                {Object.keys(colorRoles).map((colorRole: string) => {
                    if (!isColorRole(colorRole)) return null
                    return (
                        <div className="p-3 rounded-sm text-white shadow-md" style={{ backgroundColor: presetPalette[colorRole] }}/>
                    )
                })}
            </div>
        </div>
    );
}
