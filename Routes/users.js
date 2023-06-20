const UserRouter = require('express').Router()
const UserImage = require('../Middleware/UserImage');
const fileupload = require('../Middleware/fileupload')
const videoupload = require('../Middleware/videoupload')
const Auth = require('../Middleware/Auth');
const {
    createUser,
    LoginUser,
    updateUsers,
    deleteUser
    
} = require('../Contollers/users')


// const checkUserRole = (requiredRole) => {
//     return (req, res, next) => {
//       if (req.role == requiredRole) {
//         console.log("users",req.role,"requiredRole",requiredRole)
//        // User has the required role, proceed to the next middleware/route handler
//       } else {
//         res.status(403).json({ error: 'Access denieds' }); // User does not have access, send a forbidden error response
//       }
//     };
//   };

UserRouter.post('/createUsers', UserImage.upload , createUser)
UserRouter.post('/login',  LoginUser)
UserRouter.put('/updateUsers', Auth, updateUsers)
UserRouter.delete('/deleteUsers',Auth,deleteUser)


module.exports = UserRouter