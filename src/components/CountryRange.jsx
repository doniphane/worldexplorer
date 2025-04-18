import { useState } from "react";
import CountryCard from "./CountryCard";

function CountryRange({ countries }) {
    const [visibleCount, setVisibleCount] = useState(12);

    const handleRangeChange = (e) => {
        setVisibleCount(parseInt(e.target.value));
    };

    return (
        <div className="flex flex-col items-center">

            <div className="w-full max-w-md mb-4">
                <label className="block mb-2 text-center font-semibold">
                    Nombre de pays affichés : {visibleCount}
                </label>
                <input
                    type="range"
                    min="1"
                    max="250"
                    value={visibleCount}
                    onChange={handleRangeChange}
                    className="w-full"
                />
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {countries.slice(0, visibleCount).map((country) => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
            </div>
        </div>
    );
}

export default CountryRange;


