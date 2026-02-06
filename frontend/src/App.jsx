import Header from "./component/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import CountryDetail from "./component/CountryDetail";
import Error from "./component/Error";
// import { useState } from "react";
// import { ThemeContext } from "./context/ContextApi";
import { ThemeProvider } from "./context/Context";

function App() {
  // const [darkMode, setDarkMode] = useState(
  //   JSON.parse(localStorage.getItem("darkMode")) || false,
  // );

  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
