const express = require('express');
require('./src/db/connection')
const Frouter = require('./src/routs/F-routs')
const Trouter = require('./src/routs/T-routs')
const app = express();
const port = 4000;
app.use(express.json());
app.use(Frouter);
app.use(Trouter);



app.listen(port,()=>{
    console.log("server us up on running",port);
})

