const busdetails = require("../model/bus.model")

module.exports = {

    addbus : async(req,res)=>{

        let {from,to,date,travelsname,utilities,bustype,seats,windowseats,price,rating} = req.body

        busdetails.create({from:from,to:to,date:date,travelsname:travelsname,utilities:utilities,bustype:bustype,seats:seats,windowseats:windowseats,price:price,rating:rating})
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

    }
}