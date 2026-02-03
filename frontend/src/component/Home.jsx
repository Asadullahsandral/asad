import { useState } from "react";
import CountryContainer from "./CountryContainer";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
// import { Outlet } from "react-router-dom";

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <>
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountryContainer query={query} />
      </main>
      {/* <Outlet /> */}
    </>
  );
}
