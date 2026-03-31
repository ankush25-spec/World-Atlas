import React from 'react'

const Cards = ({ value }) => {
  return (
    <div className='w-full p-7.5 leading-loose rounded-[45px] bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] backdrop-blur-[10px] border-t-2 border-b-2 border-solid border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'>
      <h2 className='text-xl md:text-2xl'>{value.country}</h2>
      <p><span className='text-[rgba(255,255,255,0.5)]'>Capital : </span> {value.capital}</p>
      <p><span className='text-[rgba(255,255,255,0.5)]'>Population : </span> {value.population}</p>
      <p><span className='text-[rgba(255,255,255,0.5)]'>Interesting fact : </span> {value.interesting_fact}</p>
    </div>
  )
}

export default Cards