import React from 'react'
import { Link } from 'react-router-dom'

const Navmobile = () => {
  return (
    <div style={{backgroundColor:"black"}}>
    <nav className="navbar navbar-expand-lg " >
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:'white',fontWeight:"500",fontSize:"30px"}}>Js Travels</a>
    <button className="navbar-toggler  text-bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className='Link' to={'/'}><button className='lb'>Home</button></Link>
        </li>
        <li className="nav-item">
        <Link className='Link' to={'/bookticket'}><button className='lb'>Book Ticket</button></Link>
        </li>
        <li className="nav-item">
        <Link className='Link' to={'/contact'}><button className='lb'>Addbus</button></Link>
        </li>
        <li className="nav-item">
        <Link className='Link' to={'/signup'}><button className='lb'>Login</button></Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navmobile
