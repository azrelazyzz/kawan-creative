const Grid = ({ items, renderItem, preserveSize = false }) => {
    return (
        <div className="w-full">
            <div className="flex flex-wrap justify-center gap-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col p-4 ${
                            preserveSize
                                ? "min-w-[calc(33.33%-1.5rem)] flex-grow" // Ensure 3 items per row with padding adjustment
                                : "w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                        }`}
                    >
                        <div className="w-full h-full">{renderItem(item)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Grid;