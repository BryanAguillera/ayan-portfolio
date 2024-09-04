import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Picture from './Picture';
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import javascript from '../assets/skills/javascript.png'
import react from '../assets/skills/reaact.png'
import tailwind from '../assets/skills/tailwind.png'
import python from '../assets/skills/python.png'
import mongodb from '../assets/skills/mongodb.png'
import express from '../assets/skills/express.png'
import nodejs from '../assets/skills/nodejs.png'

const Skills = () => {

  const skills = [
    {
      id: 1,
      skill: "HTML",
      photo: html,
      percent: "90%",
      color: "#e44d26"
    },
    {
      id: 2,
      skill: "CSS",
      photo: css,
      percent: "80%",
      color: "#1572B6"
    },
    {
      id: 3,
      skill: "Javascript",
      photo: javascript,
      percent: "70%",
      color: "#D4B830"
    },
    {
      id: 4,
      skill: "React",
      photo: react,
      percent: "75%",
      color: "#62DAFC"
    },
    {
      id: 5,
      skill: "Tailwind",
      photo: tailwind,
      percent: "75%",
      color: "#38BDF8"
    },
    {
      id: 6,
      skill: "Python",
      photo: python,
      percent: "70%",
      color: "#F2BA31"
    },
    {
      id: 7,
      skill: "Mongo DB",
      photo: mongodb,
      percent: "70%",
      color: "#13AA52"
    },
    {
      id: 8,
      skill: "Node.js",
      photo: nodejs,
      percent: "60%",
      color: "#828282"
    },
    {
      id: 9,
      skill: "Express.js",
      photo: express,
      percent: "60%",
      color: "#67BA48"
    },
  ]

  const [one] = useTypewriter({
    words: ['Skills'],
    typeSpeed: 10
  });

  const [two] = useTypewriter({
    words: ['Skills I gained and learned in my course and self study'],
    typeSpeed: 10
  });
  return (
    <div>
      <div className='bg-[#121212] flex flex-col-reverse sm:flex-row items-center justify-center h-[calc(100vh-112px)] text-center sm:text-start'>
        <div className='p-5 sm:w-[550px]'>
          <p className='text-red-600 text-[40px]'>{one} <Cursor/></p>
          <p className='sm:text-[17px] text-[13px] text-white'>{two}</p>
        </div>
        <Picture/>
      </div>

      <div className='bg-[#121212] pt-10'>


        {skills.map(({id, skill, photo, percent, color}) => 

          <div key={id} className='flex flex-col-reverse lg:flex-row items-center justify-around pt-10 pb-10 w-full px-10 gap-10'>
            <div className='text-center h-[120px]'>
              <p className='text-white text-xl sm:text-3xl flex-1'>{skill}</p>
              <div className='h-10 lg:w-[600px] md:w-[500px] sm:w-[400px] w-[300px] border-2 border-white mt-10'>
                <div style={{width: percent, backgroundColor: color}} className={`w-[${percent}] h-full`}>
                </div>
              </div>
            </div>

            <img src={photo} className='lg:w-48 w-24 object-cover lg:ml-28' alt="" />
          </div>
        
        
        
        )}

      </div>
      
    </div>
  )
}

export default Skills
