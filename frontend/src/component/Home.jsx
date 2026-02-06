import { useState } from "react";
import CountryContainer from "./CountryContainer";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import PropTypes from "prop-types";
// import { ThemeContext } from "../context/ContextApi";
import { useTheme } from "../Hooks/DarkLightMode";
import { useWindowSize } from "../Hooks/windowSize";
// import { Outlet } from "react-router-dom";

export default function Home() {
  // const { darkMode } = useContext(ThemeContext);
  const { darkMode } = useTheme();
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  const { windowSize } = useWindowSize();
  return (
    <>
      <main className={darkMode ? "dark" : ""}>
        <h1 style={{ textAlign: "center" }}>
          {windowSize.width} x {windowSize.height}
        </h1>
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
