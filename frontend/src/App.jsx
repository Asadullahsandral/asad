import Header from "./component/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import CountryDetail from "./component/CountryDetail";
import Error from "./component/Error";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false,
  );
  return (
    <Router>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route
          path="/country/:name"
          element={<CountryDetail darkMode={darkMode} />}
        />
        <Route path="*" element={<Error darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
