import CountryCard from "./CountryCard";
// import countriesData from "../../CountriesData.js";
import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
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

  // const filteredCountries = region
  //   ? countriesData.filter((country) => country.region === region)
  //   : countriesData;
  // console.log(filteredCountries);

  const filterCountries = useMemo(() => {
    return countriesData.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchesRegion = region ? country.region === region : true;

      return matchesRegion && matchesSearch;
    });
  }, [query, region, countriesData]);

  // console.log(filterCountries);

  if (!countriesData.length) {
    return <Loading />;
  }

  // return filteredCountries === null ? (
  return filterCountries === null ? (
    <Loading />
  ) : (
    <div className="countries-container">
      {filterCountries
        // {filteredCountries
        //   .filter((country) => {
        //     return country.name.common
        //       .toLowerCase()
        //       .includes(query.toLowerCase());
        //   })
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
