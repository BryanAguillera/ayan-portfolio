import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {FaBars, FaTimes, FaLinkedin, FaFacebookSquare, FaGithubSquare} from 'react-icons/fa'
import ironman from '../assets/IRONMAN.png'
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const links = [
    {
        id:1,
        link: "Home",
        to: "/"
    },
    {
        id:2,
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
  return (
    
    <div className='h-28 w-full bg-[#121212] text-white flex items-center justify-around'>

      <NavLink to={"/"} className='flex justify-center items-center'>
        <img src={ironman} className='w-28 animate-pulse' alt="" />
        <p className='ml-[-20px]'>Ayan.</p>
      </NavLink>


      <ul className=' text-white hidden sm:flex'>
        {links.map(({id, link, to}) => (
          <NavLink 
            to={to}
            key={id}
            className='cursor-pointer text-red-600 hover:scale-105 duration-200 px-2 aria-[current=page]:text-white'>
            {link}
          </NavLink>

        ))}
      </ul>

      <ul className='sm:flex text-red-600 justify-center items-center gap-5 hidden'>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100009400062485"><FaFacebookSquare className='h-5 w-5'/></a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bryan-angelo-aguillera-6026662a4/"><FaLinkedin className='h-5 w-5'/></a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/BryanAguillera"><FaGithubSquare className='h-5 w-5'/></a>
        </li>
      </ul>
      
      <div  
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 text-red-600 sm:hidden z-10'>
        {nav? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {
        nav &&
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800  text-red-600 sm:hidden z-20'>
          {links.map(({id, link, to}) => (
            <NavLink 
                onClick={() => setNav(!nav)}
                to={to}
                key={id}
                className='cursor pointer'>{link}
            </NavLink>
          ))}
        </ul>
      }
    </div>
  )
}

export default Navbar
