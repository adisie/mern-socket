const mongoose = require('mongoose')

// connection to db
const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('CONNECTED')
    }catch(err){
        console.log('DB CONNECTION ERROR',err.message)
    }
}

// exports
module.exports = {
    dbConnection,
}