function CountryCard({ country }) {
    const name = country.translations?.fra?.common || country.name.common;

    return (
        <div className="bg-gray-400 rounded-lg shadow-md p-4 hover:shadow-lg transition ">
            <img
                src={country.flags.svg}
                alt={`Drapeau de ${name}`}
                className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{name}</h2>
            <p><strong>Capitale :</strong> {country.capital?.[0]}</p>
            <p><strong>Region :</strong> {country.region}</p>
            <p><strong>Population :</strong> {country.population.toLocaleString()}</p>





        </div>
    );
}

export default CountryCard;
