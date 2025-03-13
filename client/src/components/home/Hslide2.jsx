import React from 'react'
import { Link } from 'react-router-dom'

const Hslide2 = () => {
  return (
    <div id='hb1' style={{height:"700px"}}>

      <div style={{backgroundColor:"rgba(0,0,0,0.3)",height:"700px"}}>

        <h1 style={{fontSize:"60px"}} className='text-center pt-4'>About Us</h1><br />

        <div className="row justify-content-evenly mt-4">
          <div className="col-sm-5">

          </div>
          <div className="col-sm-5 card1">

          <p style={{lineHeight:"180%",textAlign:"justify",color:"black",padding:"10px 20px",fontSize:"17px",fontWeight:"500"}}>Welcome to <b style={{color:"#BF2EF0"}}><i>BusBuddy</i> </b> Your Ultimate Bus Travel Partner! ultimate solution for seamless and hassle-free bus travel reservations. We are dedicated to revolutionizing the way you book bus tickets, making it easier, faster, and more convenient than ever before.<br />At <i >BusBuddy</i>, we are a team of passionate travel enthusiasts and technology experts committed to enhancing your travel experience. Our goal is to connect travelers with a vast network of bus operators, ensuring safe, reliable, and affordable travel options across cities and regions. Whether you are planning a short trip or a long journey, we provide you with the best choices tailored to your needs.</p>

          <h5 style={{paddingLeft:"20px",color:"black"}}>Book your tickets and enjoy your journey!</h5>
          <Link className='Link' to={'/bookticket'}><button className='testbuttonhp'>BookTicket</button></Link>

          </div>
        </div>
        


      </div>

      
    </div>
  )
}

export default Hslide2
