import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital,
  data,
}) {
  //   console.log(name);
  return (
    <Link className="country-card" to={`/country/${name}`} state={{ data }}>
      <div className="flag-container">
        <img src={flag} alt={name.common + " Flag"} />
      </div>
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
}
CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string,
  data: PropTypes.object.isRequired,
};
