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

    "utilities" : {
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