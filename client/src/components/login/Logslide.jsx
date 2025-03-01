import React, { useState } from 'react'
import "../Style.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Logslide = () => {

  let [email,setEmail] = useState()
  let [password,setPassword] = useState()


  let logform = (e)=>{

    e.preventDefault()

    let logdata = {
      
      email:email,
      password:password

    }

    setEmail("")
    setPassword("")

    axios.post("http://localhost:4000/auth/login",logdata)
    .then(()=>{
      alert("Logged in")
    })
    .catch(()=>{
      alert("Error")
    })
    
     console.log(logdata);
     
  }

  return (
    <div>
        <div className="container mt-5" style={{height:"700px"}}>
        <di className="row justify-content-center ">
            <div className="col-sm-5 col-md-6 col-lg-5 p-4 " style={{borderRadius:"20px",border:"1px solid gray",backgroundColor:"#FFE1FF"}}>
  
                <h4>Login</h4>
                <hr />
                <div id='L'>

                    <input type="text" placeholder='Email'   onChange={(e)=>{setEmail(e.target.value)}} value={email} /><br />
                   
                    <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} value={password} /><br />
                    
                    <div className="row justify-content-center ">
                      <div className="col-5 ">
                        <button className='testbutton1' onClick={logform} >Login</button>
                      </div>
                    </div>
                    
                </div>


                <div>
                    <p style={{textAlign:"center", fontSize:"20px",marginTop:"10px"}}>Don't have any account? <Link to={'/signup'}>Signup</Link></p>
                </div>

            </div>
        </di>
      </div>
      
    </div>
  )
}

export default Logslide
