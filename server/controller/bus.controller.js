const bookingDetail = require("../model/bookingmodel");
const busdetails = require("../model/bus.model")

module.exports = {

    addbus : async(req,res)=>{

        let {from,to,date,travelsname,ownername,ownernumber,drivername,drivernumber,starttime,endtime,startingdate,reachingdate,snacks,water,tv,blanket,chargeport,ac,bustype,seats,price,rating} = req.body

        let totalseat = [];
        

        for (let i = 1; i <= Number(seats); i++) {
          
            let obj = {
                seatNo : i,
                status: true
            }

            totalseat.push(obj)
           
        } 

        busdetails.create({from:from,to:to,date:date,travelsname:travelsname,ownername:ownername,ownernumber:ownernumber,drivername:drivername,drivernumber:drivernumber,starttime:starttime,endtime:endtime,startingdate:startingdate,reachingdate:reachingdate,snacks:snacks,water:water,tv:tv,blanket:blanket,chargeport:chargeport,ac:ac,bustype:bustype,price:price,rating:rating, seats:totalseat, })

        .then((d)=>{
            res.json({
                status:true,
                "msg":"Bus data added",
                data:d
            })
        })
        .catch((e)=>{
            res.json({
                status:false,
                "msg":e,
                "info":"Error occured in adding bus data"
            })
        })
    },

    findbus : async (req,res)=>{

        let {from,to, date} = req.body

        
        

       await busdetails.find({from:from,to:to,date:date})
        .then((d)=>{

            res.json({
                status:true,
                busdata:d
                        })
        })
        .catch((e)=>{


            res.json({
                status:false,
                msg:"error occured in findbus"
            })
        })

    },

    findsinglebus : async (req,res)=>{

        let {id} = req.params

        await busdetails.findOne({_id:id})
        .then((d)=>{
            res.send(d)
        })
        .catch((e)=>{
            console.log(e);
            
        })
    },

    bookbus : (req,res)=>{

        let {passengerName,email,mobileNumber,alternatemobile,selectedseats} = req.body;

        bookingDetail.create({passengerName:passengerName,email:email,mobileNumber:mobileNumber,alternatemobile:alternatemobile,selectedseats:selectedseats})
        .then(()=>{
            
            res.send("bokking confirmed");
            
        })
        .catch(()=>{
           
            res.send("OOPS! Error")
        })
    }

}