//min-express app
import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
export const productApp=exp.Router()

//create product
productApp.post("/products",async(req,res)=>{
    //Get new product obj from req
    const newProduct=req.body;
 //create new product document
const newProductDocument=new ProductModel(newProduct)
//save
const result=await newProductDocument.save();
console.log("Result:",result)
//send res
res.status(201).json({message:"Product created"});
})

//read all products
productApp.get('/products',async(req,res)=>{
    //read all products from db
   let productList=await ProductModel.find()
   //send res
   res.status(200).json({message:"users",payload:productList})
})

//read a product by productId
productApp.get("/products/:productId",async(req,res)=>{
    //read obj id from req params
    const productId=req.params.id
    //find proudct by id
const productObj=await ProductModel.findOne({_id:productId})
//if product not found
if(!productObj) {
   return res.status(404).json({message:"Product not found"})
}
//send res
res.status(200).json({message:"product",payload:productObj})
})

//update a product by productId
    productApp.put("/products/:productId",async (req,res) => 
    {
        // get modified product from req
        const modifiedProduct=req.body;
        const pid=req.params.productId
        // find product by id
        const updatedProduct = await ProductModel.findByIdAndUpdate(pid,{$set:{...modifiedProduct}},{new:true,runValidators:true})
        // send res
        res.status(200).json({message:"Product Modified", payload:updatedProduct})
    })


//delete product by id
    productApp.delete("/products/:productId",async(req,res) =>
    {
       // read objectid from request params
       const pid = req.params.id;
       //find product by id
       const deletedProduct = await ProductModel.findByIdAndDelete(pid);
       if(!deletedProduct){
        return res.status(404).json({message:"Product not found"});
       }
       //send res
       res.status(200).json({message:"Product Deleted", payload:deletedProduct})
    })
