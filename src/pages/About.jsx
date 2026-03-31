import React from 'react'
import Cards from '../components/UI/Cards'
import Aboutcarddata from '../API/Aboutcards.json'

const About = () => {
  return (
    <div className='max-w-300 mx-auto mt-3 h-auto'>
      <div className='text-2xl md:text-4xl font-bold text-center leading-normal'>
        <h1>Here are the Interesting Facts <br />we're proud of</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 p-5 pr-4'>
        {Aboutcarddata.map((elem,idx)=>{
        return <Cards key={idx} value = {elem} />
      })}
      </div>
      
      
    </div>

  )
}

export default About