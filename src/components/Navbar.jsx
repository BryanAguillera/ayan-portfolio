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
    <div className="h-32 w-[90%] mx-auto sm:h-48 max-w-[1300px] py-2 flex items-center justify-center md:justify-around lg:justify-between px-4 sm:px-8 lg:px-20">
      <NavLink to={"/"}>
        <img src={StarkIndustries} className="w-48 sm:w-64 lg:w-80 mx-auto" alt="Logo" />
      </NavLink>

      <p className=" text-center hidden md:block">Web & App Developer</p>

      {/* <FaRegLightbulb
          onClick={toggleTheme}
          className="h-5 w-5 cursor-pointer"
        /> */}
    </div>
  );
};

export default Navbar;
