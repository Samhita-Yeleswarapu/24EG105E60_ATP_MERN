//create express app
import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './APIs/UserApi.js'
import {productApp} from './APIs/ProductAPI.js'
import { config } from 'dotenv' 
config();
const app=exp()

//add body parser
app.use(exp.json())
//forward req to userApp if path starts with /user-api
app.use("/user-api",userApp)
app.use("/product-api",productApp)

const port=process.env.PORT || 6000
//connect to db server
async function connectDB() {
    try{
    await connect(process.env.DB_URL)
    console.log("DB connection success")

    //start server
app.listen(6000,()=>console.log("server on port 6000.."))
}catch(err) {
    console.log("err in DB connection:",err)
} }
connectDB();



//error handling middleware at the end of the file
app.use((err,req,res,next)=>{
  //  res.json({message:"error occured",error:err.message})   for basic error handling
  //validation error
  if(err.name==="ValidationError") {
    res.status(400).json({message:"error occured",error:err.message})
  }
  //casterror
if(err.name==="CastError") {
    res.status(400).json({message:"error occured",error:err.message})
  }
  //send server side error
   res.status(500).json({message:"error occured",error:err.message})
})