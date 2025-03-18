import React, { useState } from 'react';
import '../Style.css';
import "../Animation.css"
import { Link } from 'react-router-dom';
import e from '../../assets/icons/mail.svg';
import m from '../../assets/icons/user.svg';
import f from '../../assets/icons/eyec.svg';
import g from '../../assets/icons/eyeo.svg';

import b3 from "../../assets/images/bus5.png"
import { Authstore } from '../../statemanager/auth.store';

const Signslide = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signhandler, message } = Authstore();

  const formdata = (e) => {
    e.preventDefault();
    e.target.classList.add('was-validated');

    if (e.target.checkValidity()) {
      const formData = new FormData(e.target);
      const email = formData.get('email');
      const username = formData.get('username');
      const password = formData.get('password');
      signhandler(email, username, password);
    }

    


  };

  return (
    <div className="container pt-5" style={{ height: '700px' }}>
      <div className="row justify-content-evenly">
        <div className="col-6 sbus">
          <div className="row">
            <div className="col-8 sigpag  ">
              
              <h1 style={{color:'white',fontSize:"60px",textAlign:'center'}} className='text-shadow-drop-left'><i>Unlock the smarter way to travel</i></h1>

            <img src={b3} alt="" className='img-fluid slide-right'/>
            </div>
            
            
           
          </div>
          
        </div>
        <div className="col-sm-5 col-md-6 col-lg-4 p-4 mt-4 card2">
          <p className="text-center">
            <i className={message.status ? 'bg-success' : 'bg-danger'}>{message.msg}</i>
          </p>
          <h2 className="mb-3">Signup</h2>
          <hr />

          <div id='S'>

          <form className="needs-validation" noValidate onSubmit={formdata}>
            {/* Username Field */}
            <div className="mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  required
                />
                <span className="input-group-text" style={{borderRadius: "0px 5px 5px 0px"}}>
                  <img src={m} alt="User Icon" />
                </span>
                <div className="invalid-feedback">Please enter your username.</div>
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  required
                />
                <span className="input-group-text" style={{borderRadius: "0px 5px 5px 0px"}}>
                  <img src={e} alt="Email Icon" />
                </span>
                <div className="invalid-feedback">Please enter a valid email.</div>
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  minLength="6"
                  required
                />
                <span className="input-group-text" style={{borderRadius: "0px 5px 5px 0px"}}>
                  <img
                    src={showPassword ? g : f}
                    alt="Toggle Password"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: 'pointer' }}
                  />
                </span>
                <div className="invalid-feedback">Password must be at least 6 characters.</div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="row justify-content-center">
              <div className="col-5">
                <button type="submit" className="  w-100 testbutton">
                  Submit
                </button>
              </div>
            </div>
          </form>

          </div>
          

          <p className="text-center mt-4">
            By pressing “submit” you agree to our{' '}
            <a href="#" className="" style={{color:"purple",textDecoration:"none"}}>
              terms & conditions
            </a>
          </p>

          <p className="text-center" style={{ fontSize: '20px' }}>
            Already have an account?{' '}
            <Link style={{color:"#BF2EF0",textDecoration:"none",fontSize: '20px'}} to="/login" className="fw-bold ">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signslide;
