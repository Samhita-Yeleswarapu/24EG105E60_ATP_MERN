//USER API
//Create Mini-express app(seperate route)
import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import { hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
const{sign}=jwt
import { verifyToken } from '../middlewares/verifyToken.js'
import { config } from 'dotenv'
config();
export const userApp = exp.Router()


//User Login
userApp.post('/auth',async (req,res) => 
 {
    //get user cred obj from client 
     const {email,password} = req.body
    // verify email
    let user=await UserModel.findOne({email:email})
    // if email not existed
    if(user==null)
    {
        return res.status(400).json({message:"Invalid email"})
    }
    // compare passwords
    let result = await compare(password,user.password)
    // if passwords not matched
    if(result==false)
    {
        return res.status(400).json({message:"Invalid Password"})
    }
    // if passwords matched
    // create token (jsonwebtoken -jwt -- jaat)
    const signedToken = sign({email:user.email},process.env.SECRET_KEY,{expiresIn:"1h"})
    // store token as http Only Cookie
    res.cookie("token",signedToken,
        {
            httpOnly:true,
            sameSite:"lax",
            secure:false
       })
    // send res
    res.status(200).json({message:"Login Success",payload:user})   
    })
    
    
// Define User REST API
    // Create New User
    userApp.post("/users",async(req,res)=>
        {
         // Get new user obj from req
         const newUser = req.body
         //hash the password 
        const hashedPassword = await hash(newUser.password,10)
         //replace plain password
         newUser.password = hashedPassword
        
         // Create new user document
         const newUserDocument = new UserModel(newUser)
         // Save
          const result = await newUserDocument.save()
          console.log("Result :",result)
        // Send res
        res.status(201).json({message:'User Created'})
        })

    //Read all users (Protected route)
    userApp.get("/users",verifyToken,async (req,res) => 
    {
        //read all users from db
        let usersList = await UserModel.find()
        //send res
        res.status(200).json({message: 'users', payload:usersList})
    })

    //Read a User by ObjectId
    userApp.get("/user",verifyToken,async(req,res)=>
    {
        //Read user email from re
        const emailOfUser=req.user?.email
        //find user by email
        const userObj=await UserModel.findOne({email: emailOfUser}).populate("cart.product")
        if(!userObj)
       {
        return res.status(404).json({message:"User Not Found"})
       }
        //send res
        res.status(200).json({message:"user",payload:userObj})    
    })

    // Update a User by id
    userApp.put("/users/:id",async (req,res) => 
    {
        // get modified user from req
        const modifiedUser=req.body
        const uid=req.params.id
        // find user by id
        const updatedUser = await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})
        // send res
        res.status(200).json({message:"User Modified", payload:updatedUser})
    })

    // Delete User by id
    userApp.delete("/users/:id",async (req,res) =>
    {  
       // read objectid from request params
       const uid = req.params.id
       //find user by id
       const delUser = await UserModel.findByIdAndDelete(uid)
       if(!delUser)
       {
        return res.status(404).json({message:"User Not Found"})
       }
       //send res
       res.status(200).json({message:"User Deleted", payload:delUser})

    })


/*add product to cart
userApp.put("/cart/product-id/:pid",async(req,res)=>{
//get product id from url params
let productId=req.params.pid;
//get current user details
const emailOfUser=req.user?.email
//add product to cart
let result=await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})

//if user not found
if(!result){
   return res.status(404).json({message:"User not found"})
}
res.status(200).json({message:"Product added to cart"})
})
*/


//add product to cart
userApp.put("/cart/product-id/:pid",async(req,res)=>{
//get product id from url params
let productId=req.params.pid;
//get current user details
const emailOfUser=req.user?.email
//add product to cart
let result=await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
if(productId in cart) {
    cart.product++;
}
//if user not found
if(!result){
   return res.status(404).json({message:"User not found"})
}
res.status(200).json({message:"Product added to cart"})
})


//Status Codes:
    // 200 -- success
    // 201 -- created 
    // 400 -- bad request
    // 401 -- unauthorised
    // 404 -- not found
    // 500 -- server error