const jwt = require('jsonwebtoken')

// max age
const MAX_AGE = 60 * 30 

// error handler
const errorHandler = err => {
    const errors = {username: '',email: '',password: ''}
    // field required validations
    if(err.message === 'username required'){
        errors.username = 'username required'
    }
    if(err.message === 'username not exist'){
        errors.username = 'username not exist'
    }
    if(err.message === 'password required'){
        errors.password = 'password required'
    }
    if(err.message === 'wrong password'){
        errors.password = 'wrong password'
    }
    // duplicate key errors
    if(err.code === 11000){
        // username duplication
        if(err.message.includes('username')){
            errors.username = 'username already exist'
        }
        // email duplication
        if(err.message.includes('email')){
            errors.email = 'email address already exist'
        }
    }
    // user validation failed
    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        })
    }
    return errors
}

// generate token
const generateToken = _id => {
    return jwt.sign({_id},process.env.JWT_SECRET,{expiresIn: MAX_AGE})
}

// exports
module.exports = {
    MAX_AGE,
    errorHandler,
    generateToken,
}