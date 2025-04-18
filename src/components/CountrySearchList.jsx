import { useState } from "react";
import CountryCard from "./CountryCard";

function CountrySearchList({ countries }) {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredCountries = countries.filter((country) => {
        const name = country.translations?.fra?.common || country.name.common;
        return name.toLowerCase().includes(search.toLocaleLowerCase());
    });

    return (
        <div className="flex flex-col items-center w-full">




            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                {filteredCountries.map((country) => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
            </div>
        </div>
    );
}

export default CountrySearchList;
