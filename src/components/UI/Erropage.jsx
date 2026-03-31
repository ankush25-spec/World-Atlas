import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const Erropage = () => {
    const error = useRouteError()
  return (
    <div>
        <h1>Oops! An error occured.</h1>
        {error && <p>{error.data}</p>}
        
        <NavLink to='/'>go back</NavLink>
    </div>
  )
}

export default Erropage