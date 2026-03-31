import React from 'react'
import Header from '../UI/Header'
import Footer from '../UI/Footer'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <div className='bg-black min-h-screen max-h-auto text-white overflow-x-hidden'>
      <Header className='' />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Applayout