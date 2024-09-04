import React from 'react'
import Picture from './Picture'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import {FaReact, FaHtml5, FaCss3 } from 'react-icons/fa'
import {IoLogoJavascript } from 'react-icons/io'
import laro from '../assets/laro.png'
import golds from '../assets/goldsgym.png'
import casa from '../assets/casagranja.png'
import katunying from '../assets/katunying.png'
import aguillera from '../assets/rsaguillera.png'
import { Link } from 'react-router-dom';
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import javascript from '../assets/skills/javascript.png'
import react from '../assets/skills/reaact.png'
import tailwind from '../assets/skills/tailwind.png'
import python from '../assets/skills/python.png'
import mongodb from '../assets/skills/mongodb.png'
import recipe from '../assets/recipeapp.png'
import express from '../assets/skills/express.png'
import nodejs from '../assets/skills/nodejs.png'

const Projects = () => {

  const projectData = [
    {
      id: 1,
      title: "Laro App",
      desc: "Laro App is an advanced platform designed to enhance your gaming experience by facilitating the discovery and participation in a wide range of active games, leagues, and events. Our service enables users to efficiently find and join gaming opportunities that align with their preferences and interests. Whether you are seeking competitive leagues, exciting tournaments, or casual gaming events, Laro App offers a streamlined and user-friendly interface to connect you with the gaming experiences you desire. Experience the future of gaming engagement with Laro App and elevate your gaming journey.",
      link: "https://www.laro.com.ph/",
      tech: [react, tailwind],
      photo: laro,
      color: "gray"
    },

    {
      id: 2,
      title: "Recipe App with Authentication",
      desc: "This project is a full-stack Recipe App that includes authentication and authorization features. Built with ReactJS and Tailwind CSS for the front-end and NodeJS for the back-end, it also utilizes MongoDB for database management. The project demonstrates setting up an Express.js server, using MongoDB Compass for database operations, and creating secure APIs for handling recipes.",
      link: "",
      tech: [react, tailwind, nodejs, express, mongodb],
      photo: recipe,
      color: "gray"
    },
    {
      id: 3,
      title: "Gold's Gym",
      desc: "Gold’s Gym Philippines stands as the preferred fitness destination for amateur and professional athletes, fitness and beauty contestants, entertainment industry professionals, and individuals dedicated to enhancing their health and overall quality of life.",
      link: "https://goldsgym.com.ph/",
      tech: [html, css, javascript],
      photo: golds,
      color: "gray"
    },
    {
      id: 4,
      title: "Casa Granja",
      desc: "For a distinguished and memorable event in Gapan City, consider booking with Casa Granja. They offers an exceptional setting for a wide range of events, including corporate gatherings, social celebrations, and private functions. ",
      link: "https://casagranja.ph/?fbclid=IwY2xjawEbLMpleHRuA2FlbQIxMAABHYBdwxQOLITn8M_rHGl2KR48frrjtf0Agr9c-Mga3JJZURJgpizVUFsifA_aem_pOKXt4-GJw8WRfBZxMQIZw",
      tech: [html, css, javascript],
      photo: casa,
      color: "gray"
    },
    {
      id: 5,
      title: "Ka Tunying",
      desc: `Ka Tunying’s is a casual tambayan and restoran in one, that gives that "at home feel" and serves filipino cuisine, both traditional and pambihirang home-cooked dishes at all-day merienda, for families and barkadas, professionals, balikbayans and turistas in Metro Manila at probinsya. Tara, kain tayo!`,
      link: "https://katunyings.com/",
      tech: [html, css],
      photo: katunying,
      color: "gray"
    },
    {
      id: 6,
      title: "RS Aguillera Welding Shop",
      desc: "RS Aguillera Welding Shop proudly stands as the first sidecar manufacturer in the municipality of San Jose, Batangas. Their establishment is distinguished by its pioneering role in the local industry, offering expertly crafted sidecars designed to meet the highest standards of quality and durability. With a commitment to excellence and innovation, RS Aguillera Welding Shop has become a trusted name for reliable sidecar solutions, serving both commercial and personal transportation needs in the region. We are dedicated to providing superior craftsmanship and exceptional service to our valued customers.",
      link: "",
      tech: [react, tailwind],
      photo: aguillera,
      color: "gray"
    },
  ]

  const [one] = useTypewriter({
    words: ['Projects'],
    typeSpeed: 10
  });

  const [two] = useTypewriter({
    words: ['List of Projects I have Developed and Contributed To'],
    typeSpeed: 10
  });

  const getBackgroundColorClass = (color) => {
    const colors = {
      red: 'bg-red-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      yellow: 'bg-yellow-500',
      // Add more colors as needed
    };
    return colors[color] || 'bg-[#121212]'; // Default color if not found
  };

  const renderTechIcons = (techArray) => {
    return techArray.map((tech, index) => (
      <img 
        key={index} 
        src={tech} 
        className='w-[30px] h-[30px] object-cover mr-1 ml-2' 
      />
    ));
  };


  return (
    <div>
      <div className='bg-[#121212] flex flex-col-reverse items-center justify-center sm:flex-row h-[calc(100vh-112px)] pb-10 pt-10'>
        <div className='text-center sm:text-start sm:w-[550px] p-5'>
          <p className='text-red-600 text-[40px]'>{one} <Cursor/></p>
          <p className='text-[13px] sm:text-[17px] text-white'>{two}</p>
        </div>
        <Picture/>
      </div>

      {projectData.map(({title, desc, link, tech, photo, color, id}) => (

        <div key={id} className={`border-b-2 border-t-2 pb-6 sm:border-0 sm:p-0 flex flex-col-reverse lg:flex-row items-center justify-evenly text-white sm:pb-10 ${getBackgroundColorClass(color)} text-[13px] sm:text-[17px]`}>
          <div className='sm:w-[600px] flex flex-col justify-center items-center sm:items-start gap-3 px-8 sm:text-start'>

            <div className='flex flex-col gap-4 items-center sm:items-start'>
              <p className='font-bold'>{title}</p>
              <p>{desc}</p>
              <Link to={link}>Click to Try</Link>
            </div>

            <div className='flex items-center'>
              <p>Technology Used: </p>
              <div className='flex'>
              {renderTechIcons(tech)}
              </div>
            </div>

          </div>
          <img className='w-[300px] sm:w-[500px]' src={photo} alt="" />
        </div>
      
      ))}

      


    </div>
    
  )
}

export default Projects
