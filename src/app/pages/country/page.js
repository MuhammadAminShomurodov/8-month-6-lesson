import Link from "next/link";
import React from "react";

const Home = () => {
  const countries = [
    {
      code: "us",
      name: "USA",
      flagUrl: "https://flagsapi.com/US/flat/64.png",
      region: "Americas",
      capital: "Washington, D.C.",
      population: "331 million",
    },
    {
      code: "ca",
      name: "Canada",
      flagUrl: "https://flagsapi.com/CA/flat/64.png",
      region: "Americas",
      capital: "Ottawa",
      population: "38 million",
    },
    {
      code: "de",
      name: "Germany",
      flagUrl: "https://flagsapi.com/DE/flat/64.png",
      region: "Europe",
      capital: "Berlin",
      population: "83 million",
    },
    {
      code: "fr",
      name: "France",
      flagUrl: "https://flagsapi.com/FR/flat/64.png",
      region: "Europe",
      capital: "Paris",
      population: "67 million",
    },
    {
      code: "it",
      name: "Italy",
      flagUrl: "https://flagsapi.com/IT/flat/64.png",
      region: "Europe",
      capital: "Rome",
      population: "60 million",
    },
    {
      code: "jp",
      name: "Japan",
      flagUrl: "https://flagsapi.com/JP/flat/64.png",
      region: "Asia",
      capital: "Tokyo",
      population: "126 million",
    },
    {
      code: "au",
      name: "Australia",
      flagUrl: "https://flagsapi.com/AU/flat/64.png",
      region: "Oceania",
      capital: "Canberra",
      population: "25 million",
    },
    {
      code: "br",
      name: "Brazil",
      flagUrl: "https://flagsapi.com/BR/flat/64.png",
      region: "Americas",
      capital: "Brasília",
      population: "213 million",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-between">
        {countries.map((country) => (
          <Link key={country.code} href={`/pages/country/${country.code}`}>
            <div className="p-4 w-[264px] cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={country.flagUrl}
                  alt={country.name}
                  className="w-full h-auto object-cover mb-2"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2">{country.name}</h2>
                  <p className="text-sm">Region: {country.region}</p>
                  <p className="text-sm">Capital: {country.capital}</p>
                  <p className="text-sm">Population: {country.population}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
