const {Router} = require('express')

// controllers
// users controllers
const {
    signup,
    login,
    logout,
    checkAuth,
    allUsers,
} = require('../controllers/usersControllers')

// middlewares 
// auth middleware
const {
    privateRoutes,
} = require('../middlewares/authMiddleware')

// router
const router = Router()

// signup
router.post('/signup',signup)

// login
router.post('/login',login)

// logout
router.get('/logout',logout)

// check-auth
router.get('/check-auth',privateRoutes,checkAuth)

// all users
router.get('/all-users',allUsers)

// exports
module.exports = router