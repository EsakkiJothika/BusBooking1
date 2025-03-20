import React from 'react'
import { useState } from 'react'
import e from "../../assets/svg/bed.svg"
import "../Style.css"

const Sleeper = () => {


    let [image,setImage] = useState(false)

    let booking = ()=>{
 
      
       setImage(!image)
 
       console.log(count);
       
       
    }
  return (
    <div>

<div className="p-5">
         <h1 style={{color:"#BF2EF0"}}><i>Book the seats which convinient for you !</i></h1>
        <div className="row justify-content-evenly ">
          <div className="col-8 p-2">
            <div className="container m-4">

            <div className="container p-3 ps-4 m-2 border">
               <h2>Upper</h2>
            <div className="row justify-content-evenly mt-3 booktic">
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" onClick={booking} style={{ backgroundColor: image ? "#BF2EF0" : "transparent" }}/>
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
            </div>

            <div className="row justify-content-evenly mt-1 booktic">
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
            </div><br />

            <div className="row justify-content-evenly mt-3 booktic">
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
            </div>

            </div>

            <div className="container p-3 ps-4 m-2 mt-3 border">
               <h2>Lower</h2>
            <div className="row justify-content-evenly mt-3 booktic">
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
            </div>

            <div className="row justify-content-evenly mt-1 booktic">
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
            </div><br />

            <div className="row justify-content-evenly mt-3 booktic">
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
               <div className="col-sm-1 col-md-2">
                  <img src={e} alt="" />
               </div>
            </div>

            </div>


            </div>
            
          </div>
          <div className="col-4 p-5">
            <div className="container p-3" style={{borderRadius:"5px",border:"1px solid #BF2EF0"}}>

            <form action="" className='bookform'>
               <div className="mb-3">
                  <label htmlFor="" className="form-label">Passengers Name</label>
                  <input type="text" className="form-control" placeholder="Name" />
               </div>

               <div className="mb-3">
                  <label htmlFor="" className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your Email" />
               </div>

               <div className="mb-3">
                  <label htmlFor="" className="form-label">Mobile Number</label>
                  <input type="number" className="form-control" placeholder="Mobile No." />
               </div>

               <div className="mb-3">
                  <label htmlFor="" className="form-label">Alternative Mobile Number</label>
                  <input type="number" className="form-control" placeholder="Alt. Mobile No." />
               </div>

               <div className="row justify-content-center">
                  <div className="col-6">
                     <button className='testbutton'>Book Ticket</button>
                  </div>
               </div>


            </form>

            </div>
            
          </div>
        </div><br />

        
      </div>
      
    </div>
  )
}

export default Sleeper
