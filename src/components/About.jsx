import React from 'react'
import Picture from './Picture'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const About = () => {

  const [one] = useTypewriter({
    words: ['About Me'],
    typeSpeed: 10
  });

  const [two] = useTypewriter({
    words: [`As a fresh graduate in Computer Engineering, I've recently fallen in love with the captivating world of web development. I always want to make things happen and bring imaginative ideas to life. Amazed how full-stack developers work, but for now, I’m excited to dive deep into the art and science of front-end development.`],
    typeSpeed: 10
  });

  const [three] = useTypewriter({
    words: [`When I’m not coding, you’ll find me enjoying my free time on the volleyball court with friends, blending teamwork with some healthy competition!`],
    typeSpeed: 30
  });


  return (
    <div className='bg-[#121212] sm:h-[calc(100vh-112px)] flex flex-col-reverse items-center justify-center sm:flex-row pt-20 pb-10 sm:p-0'>
      <div className='sm:w-[550px] sm:p-5 px-24 text-center sm:text-start '>
        <p className='text-red-600 text-[40px] text-wrap'>{one} <Cursor/></p>
        <p className='text-[12px]  text-white sm:text-[17px]'>{two}</p>
        <br />
        <p className='text-[12px] sm:text-[17px] text-white'>{three}</p>


      </div>

      <Picture/>
      
    </div>
  )
}

export default About
