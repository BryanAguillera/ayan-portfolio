import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaRegLightbulb,
} from "react-icons/fa";
import StarkIndustries from "../assets/images/Stark_Industries.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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
  return (
    <div className="h-48 max-w-[1300px] py-2 flex items-center justify-between mx-auto">
      <NavLink
        to={"/"}
        className="h-full w-auto flex justify-center items-center"
      >
        <img src={StarkIndustries} className="w-80" alt="Logo" />
      </NavLink>

      <p className=" text-center hidden sm:block">Web & App Developer</p>

      {/* <FaRegLightbulb
          onClick={toggleTheme}
          className="h-5 w-5 cursor-pointer"
        /> */}
    </div>
  );
};

export default Navbar;
