const mongoose = require("mongoose");


const flightSchema = mongoose.Schema({
    flightNo: {
        type: Number,
        // required: true
    },
    travelBtwCities :{
        type: String,
        // required: true
    }, 
    flightTimmings:{
        type: Number,
        // required: true
    }, 
    planeCategory:{
        type: String,
        // required: true
    }
   });


   const Flight = mongoose.model('Flight',flightSchema)
module.exports = Flight;
