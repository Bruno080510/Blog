import React from 'react'
import NavBar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const Principal = () => {
  return (
    <div>
        <NavBar/>
        <Outlet />
        <div className=' pt-10'>
          <footer className='flex items-center justify-center text-white font-semibold w-full bg-black h-20 '> @Bruno2023</footer>
        </div>
    </div>
  )
}

export default Principal