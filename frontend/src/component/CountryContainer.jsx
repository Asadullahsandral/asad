import CountryCard from "./CountryCard";
// import countriesData from "../../CountriesData.js";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function CountryContainer({ query, region }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    // fetch("https://restcountries.com/v3.1/all")
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,currencies,languages,subregion,tld",
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        setCountriesData(data);
      });
  }, []);

  const filteredCountries = region
    ? countriesData.filter((country) => country.region === region)
    : countriesData;
  // console.log(filteredCountries);

  if (!countriesData.length) {
    return <Loading />;
  }

  return filteredCountries === null ? (
    <Loading />
  ) : (
    <div className="countries-container">
      {filteredCountries
        .filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(query.toLowerCase());
        })
        .map((country) => {
          // console.log(country);
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          );
        })}
    </div>
  );
}

CountryContainer.propTypes = {
  query: PropTypes.string,
  region: PropTypes.string,
};

CountryContainer.defaultProps = {
  query: "",
  region: "",
};
