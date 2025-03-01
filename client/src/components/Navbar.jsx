import React from 'react'
import "./Style.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='A'>
      <div className="row justify-content-around">
        <div className="col-sm-4 col-md-5  mt-2 mb-2 col-lg-5">
            <h1>JS Travels</h1>
        </div>
        <div className="col-sm-4 me-5 col-md-5  col-lg-4 align-self-center">
            <nav>
                <Link className='Link' to={'/'}>Home</Link>
                <Link className='Link' to={'/travelguide'}>Travel guide</Link>
                <Link className='Link' to={'/contact'}>Contact</Link>
                <Link className='Link' to={'/signup'}>Signup</Link>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
