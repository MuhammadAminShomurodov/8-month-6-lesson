import React from "react";
import Link from "next/link";

// Example data; replace with your data fetching logic
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

export default function CountryDetail({ params }) {
  const { code } = params;
  const country = countries.find((c) => c.code === code);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="mb-4 text-blue-500 hover:underline">
        &larr; Back
      </Link>
      <div className="bg-white rounded-lg shadow-md p-4 mt-4 flex">
        <img
          src={country.flagUrl}
          alt={country.name}
          className="w-[560px] h-[401px] mr-[160px] mt-[80px] object-cover mb-2"
        />
        <div className="mt-[269px]">
          <h1 className="text-2xl font-bold mb-2">{country.name}</h1>
          <p className="text-lg">Region: {country.region}</p>
          <p className="text-lg">Capital: {country.capital}</p>
          <p className="text-lg">Population: {country.population}</p>
        </div>
      </div>
    </div>
  );
}
