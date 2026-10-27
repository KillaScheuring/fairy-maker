type SplitColorCardProps = {
    title: string;
    fillColor: string;
    outlineColor: string;
    onFillChange: (color: string) => void;
    onOutlineChange: (color: string) => void;
};

export function SplitColorCard({
                                   title,
                                   fillColor,
                                   outlineColor,
                                   onFillChange,
                                   onOutlineChange,
                               }: SplitColorCardProps) {
    return (
        <div className="rounded-xl border border-gray-200 p-3 shadow-sm">
            <div className="flex h-6 overflow-hidden">
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
                        onChange={(event) => onFillChange(event.target.value)}
                        aria-label={`${title} fill color`}
                        className="absolute inset-0 px-3 h-full w-1/4 cursor-pointer opacity-0"
                    />
                </label>

                {/* Outline color: right half */}
                <label
                    className="relative flex-1 cursor-pointer border-l border-black/20"
                    title={`Change ${title.toLowerCase()} outline`}
                >
                    <span
                        className="absolute inset-0"
                        style={{backgroundColor: outlineColor}}
                    />
                    <input
                        type="color"
                        value={outlineColor}
                        onChange={(event) => onOutlineChange(event.target.value)}
                        aria-label={`${title} outline color`}
                        className="absolute inset-0 px-3 h-full w-1/4 cursor-pointer opacity-0"
                    />
                </label>
                <h3 className="ms-2 text-sm font-medium capitalize w-1/2">
                    {title}
                </h3>
            </div>
        </div>
    );
}
