const mongoose = require('mongoose')


const reviewsModel = new mongoose.Schema({
    order:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Order'
    },
    rating:{
        type:Number,
        unique:true,

    },
    status:{
        type:Boolean,
        default : true
    } 

},{timestamps:true})


module.exports= mongoose.model('Reviews',reviewsModel)