import CharacterPreview from "./CharacterPreview.tsx";
import AssetPicker from "./AssetPicker.tsx";
import {CharacterProvider} from "../character/CharacterContext.tsx";
import ColorSelector from "./ColorSelector.tsx";
import OptionButtons from "./OptionButtons.tsx";


export default function CharacterBuilder() {
    return (
        <CharacterProvider>
            <main className="min-h-screen p-4 sm:p-6">
                <header className="mx-auto mb-6 max-w-7xl">
                    <h1 className="text-2xl font-bold sm:text-3xl">
                        Fairy Character Creator
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                        Customize your character's appearance.
                    </p>
                </header>

                <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)]">
                    {/* Character preview */}
                    <section className="min-w-0 rounded-2xl border p-4 shadow-sm sm:p-6">
                        <h2 className="mb-4 text-lg font-semibold">
                            Preview
                        </h2>

                        <div className="mx-auto w-full max-w-lg">
                            <CharacterPreview />
                        </div>
                    </section>

                    {/* Asset picker */}
                    <div>
                        <section className="min-w-0 rounded-2xl border p-4 shadow-sm sm:p-6 mb-5">
                            <h2 className="mb-4 text-lg font-semibold">
                                Customize
                            </h2>
                            <ColorSelector/>
                            <div className="max-h-[75vh] overflow-y-auto">
                                <AssetPicker />
                            </div>
                        </section>
                        <section className="min-w-0 rounded-2xl border p-4 shadow-sm sm:p-6">
                            <h2 className="mb-4 text-lg font-semibold">
                                Options
                            </h2>
                            <OptionButtons/>
                        </section>
                    </div>
                </div>
            </main>
        </CharacterProvider>
    )
};