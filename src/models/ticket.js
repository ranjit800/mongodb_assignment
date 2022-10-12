const mongoose = require("mongoose");


const ticketSchema = mongoose.Schema({
    // ticketNo: {
    //     type: Number,
    //     required: true
    // },

    ticketNo: {
        type: Number,
        // required: true,
        // unique: false
},
passenger: {
    type: String,
    // required: false,
    // trim: false
},
destination: {
    type: String,
    // required: false,
    // trim: false
}

    // arrivalAirport :{
    //     type: String,
    //     required: false
    // }, 

    // departureAirport:{
    //     type: String,
    //     required: true
    // },

    // flightTimmings:{
    //     type: Number,
    //     required: false
    // }
   });

   const Tickets = mongoose.model('Tickets',ticketSchema)
   module.exports = Tickets;