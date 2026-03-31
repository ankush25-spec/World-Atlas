import React from 'react'
import Footerdata from '../../API/Footerdata.json'
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";



const Footer = () => {
  const footericon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  }
  return (
    <footer className='mt-10 bg-[#1f1f1f] sm:h-20 w-screen hidden sm:flex flex-row justify-center items-center px-5 py-3'>
      <div className='w-300  flex flex-col gap-5 sm:flex-row justify-between items-center'>
        {Footerdata.map((elem, idx) => {
          const { icon, title, details } = elem
          return (
            <div key={idx} className='flex items-center gap-3 cursor-pointer'>
              <div className='text-[#3a4ed5] text-3xl'>{footericon[icon]}</div>
              <div className='flex justify-center items-center flex-col'>{title} <br /><span className='text-[rgba(255,255,255,0.5)]'>{details}</span></div>
            </div>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer