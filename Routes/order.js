const OrderRouter = require('express').Router()
const Auth = require('../Middleware/Auth') 

const {
    createOrders,
    getAll,
    getOrderById,
    deleteOrder
} = require('../Contollers/order')

OrderRouter.post('/createOrder',Auth, createOrders)
OrderRouter.get('/getAll',Auth, getAll)
OrderRouter.get('/getOrderById/:_id',Auth,getOrderById)
OrderRouter.delete('/deleteOrder/:_id',Auth,deleteOrder)

module.exports = OrderRouter