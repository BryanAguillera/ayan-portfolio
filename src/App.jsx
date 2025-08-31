import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";

import React, { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Add or remove the "dark" class on the <html> tag
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // Save the theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
