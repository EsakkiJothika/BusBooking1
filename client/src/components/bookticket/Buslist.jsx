import React from 'react'
import "../Style.css"
import e from "../../assets/icons/star.png"
import f from "../../assets/icons/food.svg"
import w from "../../assets/icons/waterbottle.svg"
import t from "../../assets/icons/tv.svg"
import c from "../../assets/icons/chargeport.svg"
import b from "../../assets/icons/blanket.svg"

const Buslist = () => {
  return (
    <div>

        <div className="">

            <div className="row justify-content-center m-3 " >
                <div className="col-sm-11 p-4 list1">
                    
                    <h2 style={{textAlign:"center",fontSize:"35px"}}>Travels Name</h2>

                    <div className="row mt-4 bl ">
                        <div className="col-sm-4 ps-5">
                            <p>bustype</p>
                            <img src={f} alt="sampleimage" className='img-fluid' style={{border:"1px solid gray", borderRadius:"50px",padding:"10px", margin:"5px"}}/>
                            <img src={w} alt="sampleimage" className='img-fluid' style={{border:"1px solid gray", borderRadius:"50px",padding:"10px", margin:"5px"}}/>
                            <img src={t} alt="sampleimage" className='img-fluid' style={{border:"1px solid gray", borderRadius:"50px",padding:"10px", margin:"5px"}}/>
                            <img src={c} alt="sampleimage" className='img-fluid' style={{border:"1px solid gray", borderRadius:"50px",padding:"10px", margin:"5px"}}/>
                            <img src={b} alt="sampleimage" className='img-fluid' style={{border:"1px solid gray", borderRadius:"50px",padding:"10px", margin:"5px"}}/>
                            
                        </div>
                        <div className="col-sm-8 ">
                            <div className="row bl1 justify-content-evenly">
                                <div className="col-sm-2 ps-3 ">
                                    <p>time</p>
                                    <p>pickup place</p>
                                </div>
                                <div className="col-sm-2 ps-3 ">
                                    <p>endtime</p>
                                    <p>drop place</p>
                                </div>
                                <div className="col-sm-2 ps-3 ">
                                    <button className='btn btn-success' style={{padding:"7px"}}>4.8 <img src={e} alt="" className='img-fluid' style={{height:"18px"}}/></button>
                                </div>
                                <div className="col-sm-2 mt-3 mt-sm-0 ps-3  ">
                                    <p>price</p>

                                </div>
                                <div className="col-sm-2 ps-3 ">
                                    <p>No.of seats</p>
                                    <p>window seats</p>
                                </div>
                                
                            </div>

                            <div className="row justify-content-end">
                        <div className="col-sm-3 Navb">
                            <button className='testbutton'>view seats</button>
                        </div>
                        
                    </div>
                        </div>
                    </div>

                    
                   
       



                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Buslist


