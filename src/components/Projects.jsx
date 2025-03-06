import React from 'react'
import Picture from './Picture'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import laro from '../assets/images/laro.png'
import golds from '../assets/images/goldsgym.png'
import casa from '../assets/images/casagranja.png'
import katunying from '../assets/images/katunying.png'
import aguillera from '../assets/images/rsaguillera.png'
import { Link } from 'react-router-dom';
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import javascript from '../assets/skills/javascript.png'
import react from '../assets/skills/reaact.png'
import tailwind from '../assets/skills/tailwind.png'
import python from '../assets/skills/python.png'
import mongodb from '../assets/skills/mongodb.png'
import recipe from '../assets/images/recipeapp.png'
import express from '../assets/skills/express.png'
import nodejs from '../assets/skills/nodejs.png'
import { IoMdArrowRoundForward } from "react-icons/io";

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

  return (
    <div className='pb-20'>
      <h1 className='text-9xl font-bold'>PROJECTS</h1>


      <div className=''>

        <div className='flex border-t-2 py-2 gap-2'>
          <div className='w-[50%] space-y-2'>
            <div className='flex justify-between items-center pr-10'>
              <h1 className='text-3xl font-bold'>LARO APP</h1>

              <IoMdArrowRoundForward className='hover:cursor-pointer' />

            </div>

            <h2 className='text-xl'>2023</h2>
            <p className='pr-10 text-justify text-sm'>Laro App is an advanced platform designed to enhance your gaming experience by facilitating the discovery and participation in a wide range of active games, leagues, and events. Our service enables users to efficiently find and join gaming opportunities that align with their preferences and interests. Whether you are seeking competitive leagues, exciting tournaments, or casual gaming events, Laro App offers a streamlined and user-friendly interface to connect you with the gaming experiences you desire. Experience the future of gaming engagement with Laro App and elevate your gaming journey.</p>
          </div>
          <div className='w-[50%] bg-white flex items-center'>
            <img className='w-full object-cover' src={laro} alt="image" />
          </div>
        </div>

        <div className='flex border-t-2 py-2 gap-2'>
          <div className='w-[50%] space-y-2'>
            <h1 className='text-3xl font-bold'>LARO APP</h1>
            <h2 className='text-xl'>2023</h2>
            <p className='pr-10 text-justify text-sm'>Laro App is an advanced platform designed to enhance your gaming experience by facilitating the discovery and participation in a wide range of active games, leagues, and events. Our service enables users to efficiently find and join gaming opportunities that align with their preferences and interests. Whether you are seeking competitive leagues, exciting tournaments, or casual gaming events, Laro App offers a streamlined and user-friendly interface to connect you with the gaming experiences you desire. Experience the future of gaming engagement with Laro App and elevate your gaming journey.</p>
          </div>
          <div className='w-[50%] bg-white  flex items-center'>
            <img className='w-full object-cover' src={aguillera} alt="image" />
          </div>
        </div>

        <div className='flex border-t-2 py-2 justify-between gap-2'>
          <div className='w-[50%] bg-white flex-col'>
            <img className='w-[90%] object-cover mx-auto' src={aguillera} alt="image" />
            <div className='w-full space-y-2'>
              <h1 className='text-3xl font-bold'>LARO APP</h1>
              <h2 className='text-xl'>2023</h2>
              <p className='pr-10 text-justify text-sm'>Laro App is an advanced platform designed to enhance your gaming experience by facilitating the discovery and participation in a wide range of active games, leagues, and events. Our service enables users to efficiently find and join gaming opportunities that align with their preferences and interests. Whether you are seeking competitive leagues, exciting tournaments, or casual gaming events, Laro App offers a streamlined and user-friendly interface to connect you with the gaming experiences you desire. Experience the future of gaming engagement with Laro App and elevate your gaming journey.</p>
            </div>
          </div>
          <div className='w-[50%] bg-white flex-col justify-center items-center'>
            <img className='w-[90%] object-cover mx-auto' src={aguillera} alt="image" />
            <div className='w-full space-y-2'>
              <h1 className='text-3xl font-bold'>LARO APP</h1>
              <h2 className='text-xl'>2023</h2>
              <p className='pr-10 text-justify text-sm'>Laro App is an advanced platform designed to enhance your gaming experience by facilitating the discovery and participation in a wide range of active games, leagues, and events. Our service enables users to efficiently find and join gaming opportunities that align with their preferences and interests. Whether you are seeking competitive leagues, exciting tournaments, or casual gaming events, Laro App offers a streamlined and user-friendly interface to connect you with the gaming experiences you desire. Experience the future of gaming engagement with Laro App and elevate your gaming journey.</p>
            </div>
          </div>
        </div>



      </div>


    </div>

  )
}

export default Projects
