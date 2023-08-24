import React from 'react'
import NavBar from '../components/Navbar'
import { SimpleFooter } from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Principal = () => {
  return (
    <div>
        <NavBar/>
        <Outlet />
        <SimpleFooter />
    </div>
  )
}

export default Principal