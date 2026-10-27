import {colorOrder, isColorRole} from "../character/colorRoles.ts";
import {SplitColorCard} from "./SplitColorCard.tsx";



export default function ColorSelector() {

    return (
        <section className="space-y-3">
            <div className={"grid grid-cols-2 gap-3"}>
                {colorOrder.map((colorCategory) => {
                    const fillRole: string = `${colorCategory}Fill`;
                    const outlineRole: string = `${colorCategory}Outline`;
                    if (!isColorRole(fillRole) || !isColorRole(outlineRole)) return null
                    return (
                        <SplitColorCard
                            title={colorCategory}
                            fillRole={fillRole}
                            outlineRole={outlineRole}
                        />
                    );
                })}
            </div>
        </section>
    );
}
