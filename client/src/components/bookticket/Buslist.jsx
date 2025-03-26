import React from 'react'
import "../Style.css"
import e from "../../assets/icons/star.png"
import f from "../../assets/icons/food.svg"
import w from "../../assets/icons/waterbottle.svg"
import t from "../../assets/icons/tv.svg"
import c from "../../assets/icons/chargeport.svg"
import b from "../../assets/icons/blanket.svg"
import ac from "../../assets/icons/ac.svg"
import { busStore } from '../../statemanager/bus.store'
import { Link } from 'react-router-dom'

const Buslist = () => {

    let {findbus,busInfo} = busStore();

    let data = busInfo?.busdata || [];
  


console.log(data);


  return (
    <div>

{data.map((d)=>{

return(

    <div >

    <div className="row justify-content-center m-3 " key={d._id}>
        <div className="col-sm-11 p-3 list1">
            
            

            <div className="row mt-4 bl ">
                <div className="col-sm-4 ps-4">
                <h2>{d.travelsname}</h2>
                    <p>{d.bustype}</p>
                    {d.snacks && (<img src={f} alt="sampleimage" className='img-fluid' style={{border:"1px solid gray", borderRadius:"50px",padding:"10px", marginRight:"5px"}}/>)}

                    {d.water && (<img src={w} alt="sampleimage" className='img-fluid' style={{border:"1px solid gray", borderRadius:"50px",padding:"10px", marginRight:"5px"}}/>)}
                    {d.tv && (<img src={t} alt="sampleimage" className='img-fluid' style={{border:"1px solid gray", borderRadius:"50px",padding:"10px", marginRight:"5px"}}/>)}
                    {d.chargeport && (<img src={c} alt="sampleimage" className='img-fluid' style={{border:"1px solid gray", borderRadius:"50px",padding:"10px", marginRight:"5px"}}/>)}
                    {d.blanket && (<img src={b} alt="sampleimage" className='img-fluid' style={{border:"1px solid gray", borderRadius:"50px",padding:"10px", marginRight:"5px"}}/>)}
                    {d.blanket && (<img src={ac} alt="sampleimage" className='img-fluid' style={{border:"1px solid gray", borderRadius:"50px",padding:"10px", marginRight:"5px"}}/>)}
                    
                </div>
                <div className="col-sm-8 ">
                    <div className="row bl1 justify-content-evenly">
                        <div className="col-sm-2 ps-3 ">
                            Journey starts
                            <p>{d.starttime}</p>
                            <p>{d.from}</p>
                        </div>
                        <div className="col-sm-2 ps-3 ">
                            Journey Ends
                            <p>{d.endtime}</p>
                            <p>{d.to}</p>
                        </div>
                        <div className="col-sm-2 ps-3 ">
                            <button className='btn btn-success' style={{padding:"7px"}}>{d.rating}<img src={e} alt="" className='img-fluid' style={{height:"18px",marginTop:"-4px"}}/></button>
                        </div>
                        <div className="col-sm-2 mt-3 mt-sm-0 ps-3  ">
                            <p>Ticket Price: {d.price}</p>

                        </div>
                        {/* <div className="col-sm-3 ps-3 ">
                            <p>Seats Available: {d.availableseats}</p>
                
                        </div> */}
                        
                    </div>

                    <div className="row justify-content-end">
                <div className="col-sm-3 Navb">
                   <Link to={`/singlebus/${d._id}`}><button className='testbutton'>view seats</button></Link> 
                </div>
                
            </div>
                </div>
            </div>

            
           




        </div>
    </div>
</div> 

)

})}
        {/* <div className="">

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
        </div> */}
      
    </div>
  )
}

export default Buslist


