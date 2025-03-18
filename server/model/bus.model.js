let mongoose = require("mongoose");

let bus = new mongoose.Schema({

    "from" : {
        type:String
    },

    "to" : {
        type:String
    },
    
    "date" : {
        type:String
    },

    "travelsname" : {
        type:String
    },

    "ownername" : {
        type:String
    },

    "ownernumber": {
        type:Number
    },

    "drivername" : {
        type:String
    },

    "drivernumber" : {
        type:Number
    },

    "starttime" : {
        type:String
    },

    "endtime" : {
        type:String
    },

    "snacks" : {
        type:Boolean
    },

    "water" : {
        type:Boolean
    },

    "blanket" : {
        type:Boolean
    },

    "tv" : {
        type:Boolean
    },

    "chargeport" : {
        type:Boolean
    },

    "bustype" : {
        type:String
    },

    "seats" : {
        type:Number
    },

    "windowseats" : {
        type:Number
    },

    "price" : {
        type:Number
    },

    "rating" : {
        type:Number 
    }
})

let busdetails = mongoose.model("busdetails",bus);

module.exports = busdetails;