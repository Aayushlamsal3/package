import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <h1 className='error-heading'>404</h1>
    <p className='lost'>Oh no, it seems you're lost ! 🥺</p>
   <NavLink to="/" style={{ textDecoration: 'none' }} > <button className='error-btns'>Go Back to Home</button></NavLink>
   </>
  )
}

export default Error;