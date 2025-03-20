const busdetails = require("../model/bus.model")

module.exports = {

    addbus : async(req,res)=>{

        let {from,to,date,travelsname,ownername,ownernumber,drivername,drivernumber,starttime,endtime,snacks,water,tv,blanket,chargeport,bustype,seats,windowseats,price,rating} = req.body

        busdetails.create({from:from,to:to,date:date,travelsname:travelsname,ownername:ownername,ownernumber:ownernumber,drivername:drivername,drivernumber:drivernumber,starttime:starttime,endtime:endtime,snacks:snacks,water:water,tv:tv,blanket:blanket,chargeport:chargeport,bustype:bustype,seats:seats,windowseats:windowseats,price:price,rating:rating})

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
    }

}