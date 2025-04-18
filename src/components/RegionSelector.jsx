function RegionSelector({ onSelectRegion }) {
    const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania", "Antarctic"];

    return (
        <div className="flex justify-center mt-4 mb-6">
            <select
                onChange={(e) => onSelectRegion(e.target.value)}
                className="p-2 border border-black rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                {regions.map((region) => (
                    <option key={region} value={region}>
                        {region === "All" ? " Toutes les régions" : region}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default RegionSelector;
