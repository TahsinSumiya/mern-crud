const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');

const port = process.env.PORT ||5000;

const router = require('./routes/goalRoutes')
const { errorHandler } = require('./middleware/error')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.get('/api/goals',(req,res)=>{
//     res.status(200).json({message:'mern crud'})
// })
app.use('/api/goals',router)
app.use(errorHandler)

mongoose.connect(
    "mongodb+srv://tahsin:tahsin1870@tahsincluster0.7u9ws76.mongodb.net/mernapp?retryWrites=true&w=majority"
    ).then(()=>console.log("connected to database"))
    .then(()=>{
            app.listen(5000)
        }).catch((err)=>console.log(err));