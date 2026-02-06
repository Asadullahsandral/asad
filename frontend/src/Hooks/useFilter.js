import { useEffect, useMemo, useState } from "react";

export const useFilter = (query, region) => {
  const [countriesData, setCountriesData] = useState([]);
  //   console.log(query, region);
  useEffect(() => {
    // fetch("https://restcountries.com/v3.1/all") rejected
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,currencies,languages,subregion,tld,borders",
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
      //   console.log(matchesSearch);

      const matchesRegion = region ? country.region === region : true;
      //   console.log(matchesRegion);

      return matchesRegion && matchesSearch;
    });
  }, [query, region, countriesData]);
  //   console.log(filterCountries);
  return { query, region, filterCountries, countriesData };
};
