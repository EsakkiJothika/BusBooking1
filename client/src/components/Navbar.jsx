import React from 'react'
import "./Style.css"
import { Link } from 'react-router-dom'
import e from "../assets/images/logo2.png"

const Navbar = () => {
  return (
    <div >
      <div id='A' className="row justify-content-around ">
        <div className="col-sm-1">
        <img src={e} alt="" className='img-fluid' style={{height:"90px"}}/>
        </div>
          <div className="col-sm-4 col-md-5  mt-3 mb-1 col-lg-5">
          
          <h1 >BusBuddy</h1>
        </div>
        <div className="col-sm-4 me-4 mb-1 col-md-5  col-lg-5 align-self-center">
            <nav className='Navb'>
                <Link className='Link' to={'/'}><button className='lb'>Home</button></Link>
                <Link className='Link' to={'/bookticket'}><button className='lb'>BookTicket</button></Link>
                <Link className='Link' to={'/addbus'}><button className='lb'>AddBus</button></Link>
                <Link className='Link' to={'/login'}><button className='lb'>Login</button></Link>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
