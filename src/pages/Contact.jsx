import React, { useState } from 'react'

const Contact = () => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [text, settext] = useState('')


  function submithandler(e) {
    e.preventDefault()
    console.log("name:", name)
    console.log("email:", email)
    console.log("text:", text)
    setname('')
    setemail('')
    settext('')
  }


  return (
    <div className='max-w-300 mx-auto'>
      <div className='mt-3 w-[95%] md:w-[70%] lg:w-[50%] mx-auto p-7 flex flex-col'>
        <h1 className='text-center mt-5 text-4xl font-bold'>Contact Us</h1>
        <form
          onSubmit={(e) => {
            submithandler(e)
          }}
          className='mt-10'>
          <input
            required
            value={name}
            onChange={(e) => {
              setname(e.target.value)
            }}
            className='border border-white/15 w-full mt-9 rounded-2xl text-xl px-2 py-3' type="text" placeholder='Write your name' />
          <input
            required
            value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }}
            className='border border-white/15 w-full mt-9 rounded-2xl text-xl px-2 py-3' type="text" placeholder='Write your email' />
          <textarea
            required
            value={text}
            onChange={(e) => {
              settext(e.target.value)
            }}
            rows={7}
            className='border border-white/15 w-full mt-9 rounded-2xl text-xl px-2 py-3' name="" id="" placeholder='Enter your message'></textarea>
          <button className='mb-5 w-full bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] p-3 mt-9 cursor-pointer border-t border-b border-white/10 rounded-2xl text-xl'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact