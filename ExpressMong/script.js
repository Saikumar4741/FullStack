require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const mongoose = require('mongoose')
const studentRoutes = require('./routes/student.route')
app.use(cors(
    {
        origin:'http://127.0.0.1:5501'
    }
));
app.use(express.json())
app.use('/api/students',studentRoutes)
app.use(express.urlencoded({ extended: true }))
mongoose.connect('mongodb://localhost:27017/testJP')
    .then(() => {
        console.log("conection is succesful")
    })
    
app.listen(port, () => {
    console.log(`server listening at port ${port}`)
})