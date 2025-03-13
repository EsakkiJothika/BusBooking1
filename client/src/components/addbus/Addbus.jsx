import React, { useState } from 'react'
import "../Style.css"

const Addbus = () => {

    let [tname,setTname] = useState();
    let [ownername,setOwnername] = useState();
    let [Ownnum,setOwnnum] = useState();
    let [dname,setDname] = useState();
    let [dnum,setDnum] = useState();
    let [from,setFrom] = useState();
    let [to,setTo] = useState();
    let [stime,setStime] = useState();
    let [etime,setEtime] = useState();
    let [btype,setBtype] = useState();
    let [tprice,setTprice] = useState();
    let [seats,setSeats] = useState();
    let [wseats,setWseats] = useState();
    let [snacks,setSnacks] = useState();
    let [water,setWater] = useState();
    let [tv,setTv] = useState();
    let [blanket,setBlanket] = useState();
    let [chargeport,setChargeport] = useState();


    let detail = (e)=>{

        e.preventDefault();

        let busdata ={

            TravelsName : tname,
            OwnerName : ownername,
            OwnerNumber : Ownnum,
            DriverName : dname,
            DriverNumber : dnum,
            From : from,
            To : to,
            StartTime : stime,
            EndTime : etime,
            BusType : btype,
            TicketPrice : tprice,
            Seats : seats,
            WindowSeats : wseats,
            Snacks : snacks,
            Water : water,
            TV : tv,
            Blanket : blanket,
            Chargeport : chargeport

        } 


        console.log(busdata);
        

    }



  return (
    <div className='Ainp' >
      <form action="">
        <div className='container  p-sm-5'>

            

            <h1 style={{textAlign:'center'}}><i>Adding Bus Form</i> </h1>

    <div className="row justify-content-evenly  ">
        <div className="col-sm-4">
            <label htmlFor="">Travels Name</label>
            <input type="text" className="form-control" placeholder="Travels name" onChange={(e)=>{setTname(e.target.value)}}/>
        </div>
        <div className="col-sm-4">
            <label htmlFor="">Owner Name</label>
            <input type="text" className="form-control" placeholder="Owner name" onChange={(e)=>{setOwnername(e.target.value)}} />
        </div>
        <div className="col-sm-4">
            <label htmlFor="">Owner Mobile Number</label>
            <input type="number" className="form-control" placeholder="Owner No." onChange={(e)=>{setOwnnum(e.target.value)}} />
        </div>
        <div className="col-sm-4">
            <label htmlFor="">Driver Name</label>
            <input type="text" className="form-control" placeholder="Driver Name" onChange={(e)=>{setDname(e.target.value)}} />
        </div>
        <div className="col-sm-4">
            <label htmlFor="">Driver Mobile Number</label>
            <input type="number" className="form-control" placeholder="Driver No." onChange={(e)=>{setDnum(e.target.value)}} />
        </div>
        <div className="col-sm-4">
            <label htmlFor="">From</label>
            <input type="text" className="form-control" placeholder="From" onChange={(e)=>{setFrom(e.target.value)}}/>
        </div>
        <div className="col-sm-4">
            <label htmlFor="">To</label>
            <input type="text" className="form-control" placeholder="To" onChange={(e)=>{setTo(e.target.value)}} />
        </div>
        <div className="col-sm-4">
            <label htmlFor="">Start Time</label>
            <input type="time" className="form-control" placeholder="" onChange={(e)=>{setStime(e.target.value)}}/>
        </div>
        <div className="col-sm-4">
            <label htmlFor="">End Time</label>
            <input type="time" className="form-control" placeholder="Last name" onChange={(e)=>{setEtime(e.target.value)}}/>
        </div>
        <div className="col-sm-4">
            <label htmlFor="">Bus Type</label>
            <input type="text" className="form-control" placeholder="BusType (eg: Sleeper, AC, Non-AC)" onChange={(e)=>{setBtype(e.target.value)}}/>
        </div>
        <div className="col-sm-4">
            <label htmlFor="">Ticket Price</label>
            <input type="number" className="form-control" placeholder="Ticket Price" onChange={(e)=>{setTprice(e.target.value)}} />
        </div>
        <div className="col-sm-4">
            <label htmlFor="">Number of Seats</label>
            <input type="number" className="form-control" placeholder="No. of seats" onChange={(e)=>{setSeats(e.target.value)}} />
        </div>
        <div className="col-sm-4">
            <label htmlFor="">Number of Window Seats</label>
            <input type="number" className="form-control" placeholder="No. of window seats" onChange={(e)=>{setWseats(e.target.value)}} />
        </div>
        <div className="col-sm-4 mt-4">
            <label htmlFor="">What all are the utilities you provide ?</label>
         <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" onChange={(e)=>{setSnacks(e.target.value)}}/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Snacks
            </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" onChange={(e)=>{setWater(e.target.value)}}/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Waterbottle
            </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" onChange={(e)=>{setTv(e.target.value)}}/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                TV
            </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" onChange={(e)=>{setBlanket(e.target.value)}}/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Blanket
            </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" onChange={(e)=>{setChargeport(e.target.value)}}/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Charging Port
            </label>
        </div>
        </div>
        
     
    </div>

            <div className="row justify-content-center">
              <div className="col-2">
                    <button type="submit" className="  w-100 testbutton" onClick={detail}>
                        Submit
                    </button>
              </div>
            </div>

        </div>

      </form>
    </div>
  )
}

export default Addbus
