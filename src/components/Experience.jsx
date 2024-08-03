import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Picture from './Picture';
import ojt from '../assets/ojt.png'
const Experience = () => {

  const [one] = useTypewriter({
    words: ['Experiences'],
    typeSpeed: 10
  });

  const [two] = useTypewriter({
    words: ['I have 3 months experience at 8Box Solutions Inc. as a Front End Developer Intern'],
    typeSpeed: 10
  });


  return (
    <div>
      <div className='bg-[#121212] text-white flex flex-col-reverse sm:flex-row items-center justify-center  h-[calc(100vh-112px)] p-5 text-center sm:text-start'>
          <div className='sm:w-[550px]'>
            <p className='text-red-600 text-[40px]'>{one} <Cursor/></p>
            <p className='sm:text-[17px] text-[13px] '>{two}</p>
          </div>
          <Picture/>
      </div>

      <div className='pt-20 bg-[#121212]'>
        <div className={`flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-evenly text-center sm:text-start bg-[#121212] text-white gap-5 pb-10`}>
            <div className='px-8 text-[14px] sm:text-[17px] sm:w-[600px]'>
                <p className='font-bold'>Front End Developer Intern</p>
                <p>February 2024 - May 2024</p>
                <p>8Box Inc. has marked my initial foray into the industry. Over the course of three months, I have gained extensive knowledge and experience in web development. This period has significantly enriched my understanding and skills within the field.</p>
            </div>
            <img className='w-[390px]' src={ojt} alt="" />
        </div>

      </div>

      



    </div>
    
  )
}

export default Experience
