import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import img from "../assets/black_background.png"
import carddata from '../API/CardsData.json'
import Cards from '../components/UI/Cards';
import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <main className='mt-10 max-w-300 mx-auto md:mt-20 lg:mt-30 px-3'>
      <div className='flex justify-center flex-wrap'>
        <div>
          <div className='text-2xl md:text-4xl font-bold leading-normal text-center sm:text-start'>Explore the World, One <br /> Country at a Time</div>
          <div className='mt-10'>Discover the history, culture, and beauty of every nation. Sort, search, and <br /> filter through countries to find the details you need.</div>
          
            <button className='text-sm md:text-xl border border-white px-4 py-2 rounded-2xl mt-5 md:mt-10 flex items-center gap-3 cursor-pointer'><NavLink to={'/country'}>Start Exploring &nbsp; <FaArrowRight className='inline' /></NavLink></button>
          
        </div>
        <div>
          <img className='lg:ml-30 lg:h-70 w-118' src={img} alt="image" />
        </div>
      </div>
      <div className='max-w-300 mx-auto mt-10 h-auto'>
        <div className='text-2xl md:text-4xl font-bold text-center leading-normal'>
          <h1>Here are the Interesting Facts <br />we're proud of</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 p-5 pr-4'>
          {carddata.map((elem, idx) => {
            return <Cards key={idx} value={elem} />
          })}
        </div>


      </div>
    </main>
  )
}

export default Home