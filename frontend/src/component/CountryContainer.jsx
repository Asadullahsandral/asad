import CountryCard from "./CountryCard";
import PropTypes from "prop-types";
import Loading from "./Loading";
import { useFilter } from "../Hooks/useFilter";

export default function CountryContainer({ query, region }) {
  const { filterCountries, countriesData } = useFilter(query, region);

  if (!countriesData.length) {
    return <Loading />;
  }

  return filterCountries === null ? (
    <Loading />
  ) : (
    <div className="countries-container">
      {filterCountries.map((country) => {
        // console.log(country);
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
            data={country}
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
