import React from 'react'
import { IoArrowRedoOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const Countrycard = ({ countries }) => {
    return (
        <div className='border-r-2 border-b-2 border-white/10 p-8 bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] rounded-2xl'>
            <img className='w-full h-35 rounded-2xl' src={countries.flags.png} alt={countries.flags.alt} />
            <div className='leading-loose'>
                <h1 className='text-xl mt-5 font-medium'>{countries.name.common}</h1>
                <div className='mt-5 leading-loose'>
                    <h2><span className='text-[rgba(255,255,255,0.5)]'>Population : </span>{countries.population}</h2>
                    <p><span className='text-[rgba(255,255,255,0.5)]'>Region : </span>{countries.region}</p>
                    <p><span className='text-[rgba(255,255,255,0.5)]'>Capital : </span>{countries.capital[0]}</p>
                </div>
                <NavLink to={`/country/${countries.name.common}`}>
                <button className='flex justify-center items-center gap-3 w-full bg-white/10 border-b border-t border-white/15 mt-4 rounded-2xl cursor-pointer'>Read More <IoArrowRedoOutline className='inline'/>
                </button>
                </NavLink>
            </div>
        </div>
    )
}

export default Countrycard