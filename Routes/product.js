const productRouter = require('express').Router()
const Auth = require('../Middleware/Auth') 

const {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../Contollers/product')

productRouter.post('/createProduct',Auth,createProduct)

productRouter.get('/getProduct/:_id',Auth,getProduct)

productRouter.put('/updateProduct/:_id',Auth,updateProduct)

productRouter.delete('/deleteProduct/:_id',Auth,deleteProduct)

module.exports = productRouter

