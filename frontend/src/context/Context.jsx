import { useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ContextApi";

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false,
  );
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
