const express = require('express')
const Flight = require('../models/flights.js')


const router = express.Router()

router.post('/flightss',(req,res)=>{
    const flight = new Flight (req.body);

    flight.save().then(()=>{
        res.send(flight)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})


router.get('/getflightss',async(req,res)=>{
    try {
        const flight = await Flight.find({});
res.send(flight)
    } catch (error) {
        res.status(500).send()
    }
})



module.exports = router;