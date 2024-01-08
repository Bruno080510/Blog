import React from 'react'
import NavBar from '../components/Navbar'
import { SimpleFooter } from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Principal = () => {
  return (
    <div>
      <div className=' pb-28'>

        <NavBar/>
      </div>
        <Outlet />
        <SimpleFooter />
    </div>
  )
}

export default Principal