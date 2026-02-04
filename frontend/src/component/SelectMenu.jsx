import PropTypes from "prop-types";

export default function SelectMenu({ setRegion }) {
  return (
    <select
      className="filter-by-region"
      onChange={(e) => setRegion(e.target.value)}
    >
      <option hidden>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
      <option value="">All Region</option>
    </select>
  );
}

SelectMenu.propTypes = {
  setRegion: PropTypes.func.isRequired,
};
