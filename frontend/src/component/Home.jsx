import { useState } from "react";
import CountryContainer from "./CountryContainer";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import PropTypes from "prop-types";
// import { Outlet } from "react-router-dom";

export default function Home({ darkMode }) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  return (
    <>
      <main className={darkMode ? "dark" : ""}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu setRegion={setRegion} />
        </div>
        <CountryContainer query={query} region={region} />
      </main>
      {/* <Outlet /> */}
    </>
  );
}

Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
