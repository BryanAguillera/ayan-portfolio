import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className='bg-white px-10'>
      <Navbar />
      <div className='pt-16'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
