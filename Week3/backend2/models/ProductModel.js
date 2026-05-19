import { Schema,model } from "mongoose";
const productSchema=new Schema({
    productId:{
        type:String,
        required:[true,"Product ID is required"],
        minLength:[5,"Product ID should have min 5 chars"],
        maxLength:[10,"Product ID should have max 10 chars"]
    },
     productName:{
        type:String,
        required:[true,"Product Name is required"],
         minLength:[3,"Product name should have min 3 chars"],
        maxLength:[20,"Product name should have max 20 chars"]
     },
    price:{
        type:Number,
        required:[true,"Price is required"],
        minPrice:10000,
maxPrice:50000
    },
  brand:{
    type:String,
   required:[true,"Brand is required"]
  }
},
 {versionKey:false, timestamps:true,});


 //generating product model
 export const ProductModel=model("product",productSchema)
