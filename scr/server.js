const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./configuration/config.js');
const userRouter = require('./routes/user.js');

//create express App
const app = express();

app.use(bodyparser.json());
app.use(userRouter); 

mongoose.connect(config.connectionString).then(()=> {
    console.log("app connected to mongo data base");
    //listen for requests
    app.listen(config.port, () => {
        console.log(`server listening on port ${config.port}...`)
    });
}).catch(()=> {
    console.log("error connecting to data base")
});

// console.log(process.env)