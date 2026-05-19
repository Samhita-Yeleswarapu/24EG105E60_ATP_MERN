import exp from 'express'
export const productApp=exp.Router()

//create product API with below operations
let products=[]
//create new product
productApp.post('/products',(req,res)=>{
    const newProduct=(req.body)
    products.push(newProduct)
     res.json({message:"Product created"})
})


//Read all products
productApp.get('/products',(req,res)=>{
    //send res to client
    res.json({message:"all products",payload:products})
})

//Read all products by brand
productApp.get('/products/:brand',(req,res)=>{
     let brand=(req.params.brand)  
     let index=products.find(prodObj=>prodObj.brand===products.brand)
     if(products===undefined){
          return res.json({message:"Product brand not found"})
     }
     res.json({message:"brand found",payload:products})
})


//update a product
productApp.put('/products',(req,res)=>{
     let modifiedProd=req.body;
     let index=products.findIndex(userObj=>userObj.id===modifiedProd.id)
     if(index===-1){
          return res.json({message:"Product not found"})
     }
     products.splice(index,1,modifiedProd)
     //send res
     res.json({message:"Product updated"})
})


//delete a Product by id
productApp.delete('/products/:id',(req,res)=>{
     let idOfUrl=Number(req.params.productId)  
     let index=products.findIndex(prodObj=>prodObj.productId===idOfUrl)
      if(index===-1){
          return res.json({message:"Product not found to delete"})
     }
     products.splice(index,1)
     //send res
     res.json({message:"Product removed"})
})
