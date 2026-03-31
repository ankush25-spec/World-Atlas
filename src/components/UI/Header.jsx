import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {

  const [toggle, settoggle] = useState(false)


  return (
    <>
      <div className='black-overlay w-full h-full fixed duration-500 z-70'
        onClick={() => {
          settoggle(false)
        }}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? 'visible' : 'hidden'
        }}>
        <div className='flex justify-center leading-loose  w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] bg-black h-full absolute duration-500 px-8 py-5 text-2xl font-bold'
          onClick={(e) => {
            e.stopPropagation()
          }}
          style={{
            right: toggle ? '0%' : '-100%'
          }}
        >
          <nav className='w-full sm:flex flex-col text-xl text-center leading-loose list-none'>
            <NavLink to='/'>
              <li className='bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] border-b border-t border-white/70 px-3 py-1 rounded-tl-2xl rounded-br-2xl'>
                Home
              </li>
            </NavLink>
            <NavLink to='/about'>
              <li className='bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] border-b border-t border-white/70 px-3 py-1 rounded-tl-2xl rounded-br-2xl mt-5'>
                About
              </li>
            </NavLink>
            <NavLink to='/country'>
              <li className='bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] border-b border-t border-white/70 px-3 py-1 rounded-tl-2xl rounded-br-2xl mt-5'>
                Country
              </li>
            </NavLink>
            <NavLink to='/contact'>
              <li className='bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] border-b border-t border-white/70 px-3 py-1 rounded-tl-2xl rounded-br-2xl mt-5'>
                Contact
              </li>
            </NavLink>

          </nav>
        </div>
      </div>
      <header className='bg-[#1f1f1f] text-white w-screen sticky top-0 px-7'>
        <div className=' flex items-center justify-between max-w-300 mx-auto h-20'>
          <div className='text-[20px] md:text-2xl lg:text-3xl font-bold'>
            <NavLink to='/'>
              <h1>World Atlas</h1>
            </NavLink>

          </div>
          <GiHamburgerMenu onClick={() => {
            settoggle(true)
          }} className="sm:hidden text-2xl" />

          <nav className=' hidden sm:flex sm:gap-3 list-none md:gap-7 lg:gap-10 '>
            <NavLink to='/'>
              <li className='bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] border-b border-t border-white/70 px-3 py-2 rounded-tl-2xl rounded-br-2xl'>
                Home
              </li>
            </NavLink>
            <NavLink to='/about'>
              <li className='bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] border-b border-t border-white/70 px-3 py-2 rounded-tl-2xl rounded-br-2xl'>
                About
              </li>
            </NavLink>
            <NavLink to='/country'>
              <li className='bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] border-b border-t border-white/70 px-3 py-2 rounded-tl-2xl rounded-br-2xl'>
                Country
              </li>
            </NavLink>
            <NavLink to='/contact'>
              <li className='bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] border-b border-t border-white/70 px-3 py-2 rounded-tl-2xl rounded-br-2xl'>
                Contact
              </li>
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header