const { findByIdAndUpdate } = require('../Models/category')
const categoryModel = require('../Models/category') 

const createCategory = async(req,res,next)=>{
    try{

        const newCategory = new categoryModel({
            name:req.body.name,
            status:req.body.status
    
        })
        const data = newCategory.save()
        res.send({
            message : "new category added !",
            status : 201,
            data : data 
        }) 
    } 
    catch(err){
        res.send({
            message : "not new category added !",
            status : 404,
             
        }) 
    }

}

const getCategory = async(req,res,next)=>{
    const _id = req.params._id
    try{

        
        console.log(_id)
        const data = await categoryModel.findById({_id}) 
        res.send({
            message:'Get Category Successfully',
            status:200,
            data:data
        })
    }
    catch(err){
        res.send({
            message : " not Get category added !",
            status : 404,
            
        }) 
    }
    
} 

const updateCategory = async(req,res,next)=>{
    const _id = req.params._id
    try{

        
        const data = await categoryModel.findByIdAndUpdate(_id,{name:req.body.name})
        
        res.send({
            message:'updated category successfully',
            status: 201,
            data:data
        })
    }
    catch(err){
        res.send({
            message : " not updated category  !",
            status : 404,
            
        }) 
    }
}

const deleteCategory = async(req,res,next)=>{
    const _id = req.params._id
    try{

        
        const data = await categoryModel.findByIdAndDelete(_id)
        res.send({
            message:"deleted category successfully",
            status: 201,
            data : data 
        })
    }
    catch(err){
        res.send({
            message : " not deleted category  !",
            status : 404,
            
        }) 
    }

} 

module.exports= { 
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory
}