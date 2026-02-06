import PropTypes from "prop-types";
// import { ThemeContext } from "../context/ContextApi";
// import { useContext } from "react";
import { useTheme } from "../Hooks/DarkLightMode";

export default function Header() {
  // const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { darkMode, setDarkMode } = useTheme();
  return (
    <>
      <header className={`header-container ${darkMode ? "dark" : ""}`}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDarkMode((prevMode) => {
                localStorage.setItem("darkMode", JSON.stringify(!prevMode));
                return !prevMode;
              });
            }}
          >
            <i className={`fa-regular fa-${darkMode ? "sun" : "moon"}`} />
            &nbsp;&nbsp;{darkMode ? "Light" : "Dark"} Mode
          </p>
        </div>
      </header>
    </>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
