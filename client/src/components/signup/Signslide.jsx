import React, { useState } from 'react'
import "../Style.css"
import { Link } from 'react-router-dom'
import axios from "axios"

const Signslide = () => {


  let [username,setUsername] = useState();
  let [email,setEmail] = useState();
  let [password,setPassword] = useState();

  let formdata = (e)=>{

    e.preventDefault()

    let signupdata = {

      username:username,
      email:email,
      password:password

    }

    setUsername("")
    setEmail("")
    setPassword("")

    axios.post("http://localhost:4000/auth/signup",signupdata)
    .then(()=>{
      alert("Account Created")
    })
    .catch(()=>{
      alert("OOPS! Error")
    })

    console.log(signupdata);
    

  }

  return (
    <div>
        <div className="container mt-5" style={{height:"700px"}}>
        <di className="row justify-content-center ">
            <div className="col-sm-5 col-md-6 col-lg-5 p-4 " style={{borderRadius:"20px",border:"1px solid gray",backgroundColor:"#FFE1FF"}}>
  
                <h4>Signup</h4>
                <hr />
                <div id='S'>

                    <input type="text" placeholder='Username'  onChange={(e)=>{setUsername(e.target.value)}} value={username} /><br />
                    <input type="text" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} value={email} /><br />
                    <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} value={password} /><br />
                    
                    <div className="row justify-content-center ">
                      <div className="col-5 ">
                        <button className='testbutton' onClick={formdata} >Submit</button>
                      </div>
                    </div>
                    
                </div>

                <p style={{textAlign:"center",color:"rgb(77, 77, 77)",marginTop:"15px"}}>By pressing “submit” you agree to our <a href="" style={{textDecoration:"none"}}>terms & conditions</a></p>

                <div>
                    <p style={{textAlign:"center", fontSize:"20px"}}>Already have an account? <Link to={'/login'}>Login</Link></p>
                </div>

            </div>
        </di>
      </div>
      
    </div>
  )
}

export default Signslide
