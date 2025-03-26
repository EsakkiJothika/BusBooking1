import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { busStore } from "../../statemanager/bus.store";
import "../Style.css";

const Singlebusinfo = () => {
  const { singlebus, bus, bookbus } = busStore();
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatStatus, setSeatStatus] = useState({});
  const [passengername, setPassengername] = useState();
  const [email, setEmail] = useState();
  const [mobilenumber, setMobilenumber] = useState();
  const [alternatemobile, setAlternatemobile] = useState();

  useEffect(() => {
    singlebus(id);
  }, [id]);

  useEffect(() => {
    if (bus && bus.seats) {
      const seatMap = bus.seats.reduce((acc, seat) => {
        acc[seat.seatNo] = seat.status; // true (available) or false (booked)
        return acc;
      }, {});
      setSeatStatus(seatMap);
    }
  }, [bus]);

  const handleSeatSelection = (seatNo) => {
    if (!seatStatus[seatNo]) return; // Ignore already booked seats

    setSelectedSeats((prev) =>
      prev.includes(seatNo) ? prev.filter((s) => s !== seatNo) : [...prev, seatNo]
    );
  };


  let handlebooking = (e)=>{
    e.preventDefault();

    let bookdata = {
      passengerName : passengername,
      email : email,
      mobileNumber : mobilenumber,
      alternatemobile : alternatemobile,
      selectedseats : selectedSeats
    }

    bookbus(bookdata,id)
    console.log(bookdata);
    
  }

  return (
    <div className="container pt-5">
      <h1 style={{ color: "#BF2EF0" }}>
        <i>Book the seats which are convenient for you!</i>
      </h1>

      <div className="row justify-content-evenly mt-5">
        <div className="col-lg-8">
          {bus && bus.bustype === "sleeper" && (
            <div className="row justify-content-evenly">
              <div className="col-sm-5">
                <div className="row border p-1 p-sm-3 ">
                <h1>Upper</h1>
                  {bus.seats.filter((seat)=> seat.seatNo <= 25)
                  .map((seat)=>{
                    return(
                      <>                     
                      <div className="col-4" key={seat.seatNo}>
                      <button
                        style={{
                          height: "150px",
                          width: "100%",
                          margin: "2px",
                          border: "1px solid purple",
                          backgroundColor: !seatStatus[seat.seatNo]
                            ? "#000" // Booked seats (black)
                            : selectedSeats.includes(seat.seatNo)
                            ? "#BF2EF0" // Selected seats (purple)
                            : "transparent", // Available seats
                          color: "black",
                          cursor: seatStatus[seat.seatNo] ? "pointer" : "not-allowed",
                        }}
                        disabled={!seatStatus[seat.seatNo]}
                        onClick={() => handleSeatSelection(seat.seatNo)}
                      >
                        {seat.seatNo}
                      </button>
                    </div>
                      </>                                       
                    )
                  })}
                  
                  
                </div>
              </div>
              <div className="col-sm-5">
                <div className="row border p-1 p-sm-3 mt-4 mt-sm-0">
                <h1>Lower</h1>
                {bus.seats.filter((seat)=> seat.seatNo > 25)
                  .map((seat)=>{
                    return(
                      <>
                      
                      <div className="col-4" key={seat.seatNo}>
                      <button
                        style={{
                          height: "150px",
                          width: "100%",
                          margin: "2px",
                          border: "1px solid purple",
                          backgroundColor: !seatStatus[seat.seatNo]
                            ? "#000"
                            : selectedSeats.includes(seat.seatNo)
                            ? "#BF2EF0"
                            : "transparent",
                          color: "black",
                          cursor: seatStatus[seat.seatNo] ? "pointer" : "not-allowed",
                        }}
                        disabled={!seatStatus[seat.seatNo]}
                        onClick={() => handleSeatSelection(seat.seatNo)}
                      >
                        {seat.seatNo}
                      </button>
                    </div>
                      </>                                       
                    )
                  })}
                  
                  
                </div>
              </div>
            </div>
          )}

          {bus && bus.bustype === "deluxe" && (
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="row border p-1 p-sm-3">
                  <h1>Seats</h1>
                  {bus.seats.map((seat) => (
                    <div className="col-3 booktic" key={seat.seatNo}>
                      <button
                        style={{
                        
                          width: "100%",
                          margin: "2px",
                          border: "1px solid purple",
                          backgroundColor: !seatStatus[seat.seatNo]
                            ? "#000"
                            : selectedSeats.includes(seat.seatNo)
                            ? "#BF2EF0"
                            : "transparent",
                          color: "black",
                          cursor: seatStatus[seat.seatNo] ? "pointer" : "not-allowed",
                        }}
                        disabled={!seatStatus[seat.seatNo]}
                        onClick={() => handleSeatSelection(seat.seatNo)}
                      >
                        {seat.seatNo}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Booking Form */}
        <div className="col-md-8 col-lg-4">
          <div
            className="container p-3 mt-5 mt-sm-4 mt-lg-0"
            style={{ borderRadius: "5px", border: "1px solid #BF2EF0" }}
          >
            <form action="" className="bookform">
              <div className="mb-3">
                <label className="form-label">Passengers Name</label>
                <input type="text" className="form-control" placeholder="Name" onChange={(e)=>{setPassengername(e.target.value)}} />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your Email" onChange={(e)=>{setEmail(e.target.value)}} />
              </div>

              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input type="number" className="form-control" placeholder="Mobile No." onChange={(e)=>{setMobilenumber(e.target.value)}} />
              </div>

              <div className="mb-3">
                <label className="form-label">Alternative Mobile Number</label>
                <input type="number" className="form-control" placeholder="Alt. Mobile No." onChange={(e)=>{setAlternatemobile(e.target.value)}} />
              </div>

              <div className="mb-3">
                <label className="form-label">Selected Seats</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedSeats.join(", ")}
                  readOnly
                />
              </div>

              <div className="row justify-content-center">
                <div className="col">
                  <button className="testbutton" style={{ marginLeft: "0", width: "100%" }} onClick={handlebooking}>
                    Book Ticket
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlebusinfo;
