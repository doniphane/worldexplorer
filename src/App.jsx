import { useEffect, useState } from "react";
import SortButtons from "./components/SortButtons";
import CountryRange from "./components/CountryRange";
import CountrySearchList from "./components/CountrySearchList";



function App() {
  const [countries, setCountries] = useState([]);
  const [sortedCountries, setSortedCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
        setSortedCountries(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des pays :", error);
      }
    };

    fetchCountries();
  }, []);

  const sortByPopulation = (order) => {
    let sorted = [];

    if (order === "asc") {
      sorted = [...countries].sort((a, b) => a.population - b.population);
    } else if (order === "desc") {
      sorted = [...countries].sort((a, b) => b.population - a.population);
    } else if (order === "alpha") {
      sorted = [...countries].sort((a, b) => {
        const nameA = a.translations?.fra?.common || a.name.common;
        const nameB = b.translations?.fra?.common || b.name.common;
        return nameA.localeCompare(nameB);
      });
    }

    setSortedCountries(sorted);
  };


  const filteredCountries = sortedCountries.filter((country) => {
    const name = country.translations?.fra?.common || country.name.common;
    return name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">World Explorer</h1>

      <SortButtons onSort={sortByPopulation} />


      <div className="w-full flex justify-center mt-4 mb-6">
        <input
          type="text"
          placeholder="Rechercher un pays..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-2 border border-black rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
      </div>


      {search.length > 0 ? (
        <CountrySearchList countries={filteredCountries} />
      ) : (
        <CountryRange countries={sortedCountries} />
      )}
    </div>
  );
}

export default App;
