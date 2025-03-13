import React from 'react'
import "../Style.css"
import "../Animation.css"
import h from "../../assets/images/bgv.mp4"


const Hslide = () => {
  return (
    <div className='slide' >

      <video autoPlay loop muted playsInline className='background-clip'>
        <source  src={h} type='video/mp4'/>
      </video>

      <div className='slidecon tracking-in-contract-bck'>
        <h1><i>Welcome to BusBuddy</i></h1>

      </div>
      
     
    </div>
  )
}


{/* <div className="row justify-content-evenly card1 ">
          <div className="col-sm-5 align-self-center mt-5 mt-sm-2" style={{lineHeight:"200%"}}>
            <h2><i>The Road Awaits - Are You Ready?</i></h2>
            <p style={{fontSize:"18px",textAlign:"justify",fontWeight:"500"}}><i>Life is about the journeys we take, not just the destinations. Find your next adventure, book your bus ticket online, and let the road lead the way.</i></p>
         
          </div>
          <div className="col-sm-5 p-5">
            <img src={h} alt="" className='img-fluid' style={{borderRadius:"10% 90% 11% 89% / 81% 23% 77% 19% "}}/>
          </div>

        </div> */}

export default Hslide
