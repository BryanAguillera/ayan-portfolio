import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { FaBars, FaTimes, FaLinkedin, FaFacebookSquare, FaGithubSquare, FaRegLightbulb } from 'react-icons/fa'
import StarkIndustries from '../assets/images/Stark_Industries.png'
const Navbar = () => {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: "Home",
      to: "/"
    },
    {
      id: 2,
      link: "About",
      to: "/about"
    },
    {
      id: 3,
      link: "Projects",
      to: "/projects"
    },
    {
      id: 4,
      link: "Experience",
      to: "/experience"
    },
    {
      id: 5,
      link: "Certificates",
      to: "/certificates"
    },
    {
      id: 6,
      link: "Skills",
      to: "/skills"
    }
  ]

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

    <div className='h-auto w-full bg-white py-2'>
      <div className='max-w-[1300px] flex items-center justify-around mx-auto'>

        <NavLink to={"/"} className='h-full w-auto flex justify-center items-center'>
          <img src={StarkIndustries} className='w-80' alt="Logo" />
        </NavLink>  

        <p className='flex-1 text-center'>Web & App Developer</p>

        <ul className='hidden sm:flex flex-col items-end'>
          {links.map(({ id, link, to }) => (
            <NavLink
              to={to}
              key={id}
              className='cursor-pointer text-red-600 dark:text-[#475569]  hover:scale-105 duration-200 px-2 aria-[current=page]:text-yellow-300 dark:aria-[current=page]:text-red-600'>
              {link}
            </NavLink>
          ))}
        </ul>


        {/* <div
          onClick={() => setNav(!nav)}
          className='cursor-pointer pr-4 text-red-600 sm:hidden z-10'>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {
          nav &&
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800  text-red-600 sm:hidden z-20'>
            {links.map(({ id, link, to }) => (
              <NavLink
                onClick={() => setNav(!nav)}
                to={to}
                key={id}
                className='cursor pointer'>{link}
              </NavLink>
            ))}
          </ul>
        } */}


        {/* <FaRegLightbulb onClick={toggleTheme} className='h-5 w-5 cursor-pointer' /> */}


      </div>

    </div>
  )
}

export default Navbar
