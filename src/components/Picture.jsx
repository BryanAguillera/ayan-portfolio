import React from 'react'
import Ayan from '../assets/AYAN (1).png'
import '../index.css'

const Picture = () => {
  return (
    <div className=''>

      <img src={Ayan} className='w-[439px] hidden sm:flex' />

      <div className='border-2 border-red-600 w-[200px] h-[200px] rounded-full relative flex justify-center clip-bottom sm:hidden z-10'>
        <img src={Ayan} alt=""  className='w-[200px] absolute bottom-0 sm:hidden'/>
      </div>
    </div>
  )
}

export default Picture
