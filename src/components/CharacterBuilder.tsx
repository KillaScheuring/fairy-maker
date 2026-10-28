import CharacterPreview from "./CharacterPreview.tsx";
import AssetPicker from "./AssetPicker.tsx";
import {CharacterProvider} from "../character/CharacterContext.tsx";
import ColorSelector from "./ColorSelector.tsx";
import OptionButtons from "./OptionButtons.tsx";


export default function CharacterBuilder() {
    return (
        <CharacterProvider>
            <main className="mx-auto md:w-9/10 w-full grid md:h-dvh md:grid-cols-2 gap-1 overflow-hidden p-2">
                {/* Left half: Character preview */}
                <section className="min-h-0 min-w-0 p-2 rounded-2xl border">
                    <h2 className="pb-1">Preview</h2>
                    <div className="h-full w-full items-center justify-center">
                        <CharacterPreview />
                    </div>
                </section>
                {/* Right half: Customization and export */}
                <section className="grid min-h-0 min-w-0 md:grid-rows-[3fr_1fr] gap-2 px-2">
                    <div className="flex min-h-0 flex-col overflow-hidden rounded-2xl border p-4">
                        <h2>Customize</h2>
                        <ColorSelector/>
                        <AssetPicker/>
                    </div>

                    <div className="min-h-0 overflow-y-auto rounded-2xl border md:p-3">
                        <OptionButtons/>
                    </div>
                </section>
            </main>
        </CharacterProvider>
    )
};