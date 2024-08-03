import React, { useEffect, useState } from 'react'
import Ayan from '../assets/Ayan.png'
import Picture from './Picture'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Home = () => {

    const [one] = useTypewriter({
        words: [`Hello, I'am`],
    });

    const [two] = useTypewriter({
        words:[`Bryan Aguillera`],
    });

    const [three] = useTypewriter({
        words:[`FrontEnd Developer`],
    });

  return (
    <div className='bg-[#121212] h-[calc(100vh-112px)] flex flex-col-reverse sm:flex-row items-center justify-center pt-10 sm:pt-0'>
        <div className=' p-5 sm:w-[550px] text-center sm:text-start'>
            <p className='sm:text-[30px] text-[20px] text-white'>{one}</p>
            <p className='text-red-600 sm:text-[40px] text-[30px]'>{two}<Cursor/></p>
            <p className='sm:text-[30px] text-[20px] font-bold text-white'>{three}</p>
        </div>
        
         <Picture/>   
        
        
        
      
    </div>
  )
}

export default Home
