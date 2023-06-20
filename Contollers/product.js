const productModel = require('../Models/product');
const categoryModel = require('../Models/category');

const createProduct = async(req,res,next)=>{
    
    try{
        const catId = req.body.category
        const valid = await categoryModel.findById({ _id :catId ,  status: true}).select('status');
       
        if(valid.status) {
            const newProduct = new productModel({
                name : req.body.name,
                status : req.body.status,
                color : req.body.color,
                size : req.body.size,
                weight : req.body.weight,
                category : catId
            })
            const data = await newProduct.save()
            res.send({
                message:"new product is created",
                status : 201,
                data : data
            })
        }else{
            res.send({
                message:"Category Not Active",
                status : 404,
            }) 
        }

    }
    catch(err){
        res.send({
            message:"new product is not created",
            status : 404,
        
        })
    }

}

const getProduct = async (req,res,next)=>{
    
    const _id = req.params._id
    
    try{
        
            const data = await productModel.findById(_id).populate({path:"category",select:'name'})
            console.log(data)
            res.send({
                message:'get data successfully ...',
                status: 200,
                data:data 
            })

    }
    catch(err){
        console.log(err);
        res.send({
            message:'not get data successfully',
            status: 404,
            
        })
    }   
}

const updateProduct = async(req,res,next)=>{
    const _id = req.params._id
    try{
        
        const data = await productModel.findByIdAndUpdate(_id,{name:req.body.name})
        data.acknowledged === true ?
        (
            res.send({
                message:'update product successfully',
                status: 201,
                data : data 
            })
    
        ) :
        (
            res.send({
                message: "product not updated",
                status:204,
            })  
        )




    }
    catch(err){
        res.send({
            message:'server error',
            status: 503 
        })
    }
}

const deleteProduct = async (req,res,next )=>{
    const _id = req.params._id
    try{

        
        
        const data = await productModel.findByIdAndDelete(_id)
        res.send({
            message: 'delete product successfully',
            status:201,
            data : data
        })
    }
    catch(err){
        res.send({
            message:'not delete product successfully',
            status: 404,
             
        })
    }


}

module.exports= { 
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}

