import React, { useState } from 'react'
import e from "../../assets/images/h2.png"
import "../Style.css"
import l from "../../assets/icons/bus.svg"
import c from "../../assets/icons/calender.svg"
import w from "../../assets/icons/walk.svg"
import r from "../../assets/icons/run.svg"

import e1 from "../../assets/icons/star.png"
import f from "../../assets/icons/food.svg"
import w1 from "../../assets/icons/waterbottle.svg"
import t from "../../assets/icons/tv.svg"
import c1 from "../../assets/icons/chargeport.svg"
import b from "../../assets/icons/blanket.svg"
import { busStore } from '../../statemanager/bus.store'

const Btslide = () => {


  let {findbus,busInfo} = busStore();

  


  let [from,setFrom] = useState();
  let [to,setTo] = useState();
  let [date,setDate] = useState();

  let jdata = (e)=>{

    e.preventDefault();

    let traveldata = {

      from:from,
      to:to,
      date:date

    }

//    console.log(data);
   
    

    findbus(traveldata)
   
    
    
    
    
  }


  return (
    <div className=' ' id='BT' >

<div id='BTB' >


<form action="">

  <div className="row justify-content-center p-2 p-sm-5 " id='fom'>

  <h2 className='mt-3 text-center'><i>Book your Tickets Easily through online</i></h2>

    

    <div className="col-sm-3 mt-1 mt-sm-4">
              <div className="input-group mb-3">
                        <span className="input-group-text" ><img src={r} alt="" style={{height:"18px"}}/><img src={l} alt="" /></span>
                        <input type="text" className="form-control" placeholder="From" onChange={(e)=>{setFrom(e.target.value)}} />
                    </div>
    </div>
    <div className="col-sm-3 mt-1 mt-sm-4">
            <div className="input-group mb-3">
                        <span className="input-group-text" ><img src={l} alt="" /><img src={w} alt="" style={{height:"18px"}}/></span>
                        <input type="text" className="form-control" placeholder="To" onChange={(e)=>{setTo(e.target.value)}} />
                    </div>
    </div>
    <div className="col-sm-3  mt-1 mt-sm-4">
            <div className="input-group ">
                        <span className="input-group-text" ><img src={c} alt="" /></span>
                        <input type="date" className="form-control" placeholder="Date" onChange={(e)=>{setDate(e.target.value)}}/>
                    </div>
    </div>

    <div className="row justify-content-center mt-2 mt-sm-0">
                      <div className="col-sm-2 col-6">
                        <button className='testbuttonbt' onClick={jdata}>Search</button>
                      </div>
    </div>


    </div>

    </form>
    


    
    </div>

    



    
    </div>
    
  )
}

export default Btslide
