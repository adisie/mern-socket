require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
// socket 
const {
    app,
    server,
} = require('./socket/socket')

// db 
const {
    dbConnection,
} = require('./db/dbConnection')

// port
const PORT = process.env.PORT || 5050

// settings
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:3000',],
    credentials: true,
}))

// routes
// users routes
app.use('/api/users',require('./routes/usersRoutes'))

server.listen(PORT,async ()=>{
    await dbConnection();
    console.log('LISTENING')
})