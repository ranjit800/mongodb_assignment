const express = require('express');
const Tickets = require('../models/ticket');

const router = express.Router()


router.post('/tickets',(req,res)=>{
    const ticket = new Tickets (req.body);

    ticket.save().then(()=>{
        res.send(ticket)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

router.get('/gettickets',async(req,res)=>{
    try {
        const ticket = await Tickets.find({});
res.send(ticket)
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router;