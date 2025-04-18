import { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";
import SortButtons from "./components/SortButtons";
import CountryRange from "./components/CountryRange";


function App() {
  const [countries, setCountries] = useState([]);
  const [sortedCountries, setSortedCountries] = useState([]);

  const sortByPopulation = (order) => {
    const sorted = [...countries].sort((a, b) => {
      return order === "asc"
        ? a.population - b.population
        : b.population - a.population;
    });
    setSortedCountries(sorted);
  };

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

  return (
    <div className=" bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Wold Explorer</h1>
      <SortButtons onSort={sortByPopulation} />
      <CountryRange countries={sortedCountries} />

    </div>
  );
}

export default App;
