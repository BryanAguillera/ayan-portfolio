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


const Projects = () => {

  const projectData = [
    {
      id: 1,
      title: "Laro App",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique itaque nostrum consequatur maiores animi consectetur distinctio obcaecati vitae suscipit? Fugit, perferendis asperiores. Perspiciatis doloremque alias corrupti quae iure dicta suscipit!",
      link: "https://www.laro.com.ph/",
      tech: [react, tailwind],
      photo: laro,
      color: "gray"
    },
    {
      id: 2,
      title: "Gold's Gym",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique itaque nostrum consequatur maiores animi consectetur distinctio obcaecati vitae suscipit? Fugit, perferendis asperiores. Perspiciatis doloremque alias corrupti quae iure dicta suscipit!",
      link: "https://www.laro.com.ph/",
      tech: [html, css, javascript],
      photo: golds,
      color: "gray"
    },
    {
      id: 3,
      title: "Casa Granja",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique itaque nostrum consequatur maiores animi consectetur distinctio obcaecati vitae suscipit? Fugit, perferendis asperiores. Perspiciatis doloremque alias corrupti quae iure dicta suscipit!",
      link: "https://www.laro.com.ph/",
      tech: [html, css, javascript],
      photo: casa,
      color: "gray"
    },
    {
      id: 4,
      title: "Ka Tunying",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique itaque nostrum consequatur maiores animi consectetur distinctio obcaecati vitae suscipit? Fugit, perferendis asperiores. Perspiciatis doloremque alias corrupti quae iure dicta suscipit!",
      link: "https://www.laro.com.ph/",
      tech: [html, css],
      photo: katunying,
      color: "gray"
    },
    {
      id: 5,
      title: "RS Aguillera Welding Shop",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique itaque nostrum consequatur maiores animi consectetur distinctio obcaecati vitae suscipit? Fugit, perferendis asperiores. Perspiciatis doloremque alias corrupti quae iure dicta suscipit!",
      link: "https://www.laro.com.ph/",
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
        className='w-[30px] h-[30px] mr-1 ml-2' 
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
