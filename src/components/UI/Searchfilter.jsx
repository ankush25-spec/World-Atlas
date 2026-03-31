import React from 'react'
import { FaSearch } from "react-icons/fa";

const Searchfilter = (props) => {
    const { search, setsearch, filter, setfilter, countries, setcountries } = props

    function sortCountries(value){
      const sortedcountries = [...countries].sort((a,b)=>{
        return value === 'asc'
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
      })
      setcountries(sortedcountries)
    }
    
    return (
        <div className='flex flex-col items-center gap-6 md:flex-row md:justify-between mt-10 p-5'>
            <div className='flex gap-5 items-center '>
                <input
                    value={search}
                    onChange={(e) => {
                        setsearch(e.target.value)
                    }}
                    className='border border-white/10 rounded-2xl px-3 h-10' type="text" placeholder='Search...' />
                <FaSearch className='inline cursor-pointer text-xl' />
            </div>
            <div className='flex gap-4'>
                <button 
                onClick={()=>{
                    sortCountries('asc')
                }}
                className='bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] px-5 py-3 border-r-2 border-l-2 border-white/10 rounded-2xl cursor-pointer font-bold'>Asc</button>
                <button 
                onClick={()=>{
                    sortCountries('desc')
                }}
                className='bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] px-5 py-3 border-r-2 border-l-2 border-white/10 rounded-2xl cursor-pointer font-bold'>Desc</button>
            </div>
            <select 
            value={filter}
            onChange={(e)=>{
                setfilter(e.target.value)
            }}
            className='bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] px-5 py-3 rounded-2xl border-r-2 border-l-2 border-white/10' name="" id="">
                <option className='bg-black' value="All">All</option>
                <option className='bg-black' value="Africa">Africa</option>
                <option className='bg-black' value="Americas">Americas</option>
                <option className='bg-black' value="Asia">Asia</option>
                <option className='bg-black' value="Europe">Europe</option>
                <option className='bg-black' value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default Searchfilter