import { useCharacter } from "../character/CharacterContext";
import {colorOrder, colorRoles, isColorRole} from "../character/colorRoles.ts";
import {SplitColorCard} from "./SplitColorCard.tsx";

export default function ColorSelector() {
    const { character, setColor } = useCharacter();

    return (
        <section className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
                {colorOrder.map((colorCategory) => {
                    const fillRole: string = `${colorCategory}Fill`;
                    const outlineRole: string = `${colorCategory}Outline`;
                    if (!isColorRole(fillRole) || !isColorRole(outlineRole)) return null
                    const fillColor = character.colors[fillRole] ?? colorRoles[fillRole].defaultColor;
                    const outlineColor = character.colors[outlineRole] ?? colorRoles[outlineRole].defaultColor;
                    return (
                        <SplitColorCard
                            title={colorCategory}
                            fillColor={fillColor}
                            outlineColor={outlineColor}
                            onFillChange={(color) => setColor(fillRole, color)}
                            onOutlineChange={(color) => setColor(outlineRole, color)}
                        />
                    );
                })}
            </div>
        </section>
    );
}
