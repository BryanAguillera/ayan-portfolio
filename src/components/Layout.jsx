import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <Outlet/>
        </div>

      
    </div>
  )
}

export default Layout
