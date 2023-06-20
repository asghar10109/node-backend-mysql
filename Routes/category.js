const CategoryRouter = require('express').Router()
const Auth = require('../Middleware/Auth')

const {
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory
} = require('../Contollers/category')

CategoryRouter.post('/createCategory', Auth ,createCategory)

CategoryRouter.get('/getCategory/:_id',Auth,getCategory)

CategoryRouter.put('/updateCategory/:_id',Auth,updateCategory)

CategoryRouter.delete('/deleteCategory/:_id',Auth,deleteCategory)

module.exports = CategoryRouter