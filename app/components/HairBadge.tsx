const getHairColor = (color: string): { bgClass: string; textClass: string } => {
    const colorMap: Record<string, { bgClass: string; textClass: string }> = {
        'Brown': { bgClass: 'bg-amber-800', textClass: 'text-white' },
        'White': { bgClass: 'bg-gray-100', textClass: 'text-gray-800' },
        'Red': { bgClass: 'bg-red-600', textClass: 'text-white' },
        'Gray': { bgClass: 'bg-slate-400', textClass: 'text-white' },
        'Green': { bgClass: 'bg-emerald-600', textClass: 'text-white' },
        'Blonde': { bgClass: 'bg-amber-300', textClass: 'text-amber-900' },
        'Purple': { bgClass: 'bg-purple-500', textClass: 'text-white' },
        'Blue': { bgClass: 'bg-blue-500', textClass: 'text-white' },
        'Black': { bgClass: 'bg-gray-800', textClass: 'text-white' },
    };

    return colorMap[color] || { bgClass: 'bg-gray-300', textClass: 'text-gray-800' };
};

const HairColorBagde = ({ hair }: { hair: Record<string, number> }) => {
    return (
        <div className="mt-3">
            <p className="text-sm font-medium text-gray-700">Hair Colors</p>
            <div className="flex flex-wrap gap-2 mt-1">
                {Object.entries(hair).map(([color, count]) => {
                    const { bgClass, textClass } = getHairColor(color);
                    return (
                        <div
                            key={color}
                            className={`flex items-center rounded-full px-2 py-1 text-xs ${bgClass} ${textClass}`}
                        >
                            {color}: {count}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HairColorBagde;