const reviewRouter = require('express').Router()
const Auth = require('../Middleware/Auth')

const {
    createReviews,
    getReviews,
    getReviewByID,
    updateReviews,
    deleteReviews
} = require('../Contollers/reviews')

reviewRouter.post('/createReview/OrderId/:oid', Auth , createReviews)
reviewRouter.get('/getReview',Auth,getReviews)
reviewRouter.get('/getReviewByID/:_id',Auth,getReviewByID)
reviewRouter.put('/updateReviews/:_id',Auth,updateReviews)
reviewRouter.delete('/deleteReviews/:_id',Auth,deleteReviews)

module.exports = reviewRouter