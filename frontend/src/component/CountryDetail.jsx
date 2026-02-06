import "./countryDetail.css";
// import CountriesData from "../../CountriesData";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function CountryDetail() {
  const { name } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [countryBorder, setCountryBorder] = useState(null);
  //   console.log(name);

  //   const countryData = CountriesData.find((country) => {
  //     return country.name.common === name;
  //   });
  //   console.log(name);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCountryData(data[0]);
        // console.log(data[0].borders);
        if (data[0].borders) {
          fetch(
            `https://restcountries.com/v3.1/alpha/?codes=${data[0].borders.join(",")}&fields=name`,
          )
            .then((res) => res.json())
            .then((border) => {
              //   console.log(border);
              setCountryBorder(border);
            });
        } else {
          setCountryBorder([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  //   console.log(countryBorder);

  if (!countryData) {
    return <Loading />;
  }

  return countryData === null ? (
    <Loading />
  ) : (
    <main>
      <div className="country-details-container">
        <Link to="/">
          <span className="back-button">
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>
        </Link>
        <div className="country-details">
          <img
            src={countryData?.flags.svg}
            alt={`${countryData?.name.common} flag`}
          />
          <div className="details-text-container">
            <h1>{countryData.name.common}</h1>
            <div className="details-text">
              <p>
                <b>
                  Native Name:{" "}
                  {/* {Object.values(countryData.name.nativeName)[0].common ||
                    " N/A"} */}
                  {countryData.name.nativeName
                    ? Object.values(countryData.name.nativeName)[0]?.common
                    : "N/A"}
                </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString("en-IN")}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion || "N/A"}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital?.join(", ") || "N/A"}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>
                  Currencies:
                  {/* {Object.values(countryData.currencies).map((currency) => (
                    <span key={currency.name}>{currency.name}</span>
                  ))} */}
                  {countryData.currencies
                    ? Object.values(countryData.currencies)
                        .map((currency) => currency.name)
                        .join(", ")
                    : "N/A"}
                </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>
                  Languages:{" "}
                  {/* {Object.values(countryData.languages).join(", ")} */}
                  {countryData.languages
                    ? Object.values(countryData.languages).join(", ")
                    : "N/A"}
                </b>
                <span className="languages"></span>
              </p>
            </div>
            {countryBorder?.length > 0 ? (
              <div className="border-countries">
                <b>Border Countries:</b>
                &nbsp;
                {countryBorder.map((border) => {
                  //   console.log(border);
                  return (
                    <Link
                      key={border.name.common}
                      to={`/country/${border.name.common}`}
                    >
                      {border.name.common}
                      {/* {console.log(border.name.common)} */}
                    </Link>
                  );
                })}
              </div>
            ) : (
              <span>No Border</span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
