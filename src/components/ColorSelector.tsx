import { useCharacter } from "../character/CharacterContext";
import {colorRoles} from "../character/colorRoles.ts";

export default function ColorSelector() {
    const { character, setColor } = useCharacter();

    return (
        <section className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
                {Object.entries(colorRoles).map(([role, { label, defaultColor }]) => {
                    const color = character.colors[role] ?? defaultColor;
                    return (
                        <label
                            key={role}
                            className="flex items-center gap-3 rounded-lg border border-purple-200 p-3"
                        >
                            <input
                                type="color"
                                value={color}
                                onChange={(event) => setColor(role, event.target.value)}
                                aria-label={`${label} color`}
                                className="h-10 w-10 shrink-0 cursor-pointer rounded border-0 bg-transparent p-0"
                            />

                            <span className="min-w-0">
                <span className="block text-sm font-medium text-start">{label}</span>
                <span className="block text-xs uppercase text-gray-500">
                  {color}
                </span>
              </span>
                        </label>
                    );
                })}
            </div>
        </section>
    );
}
