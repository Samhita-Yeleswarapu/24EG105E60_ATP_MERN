//create user schema
import { Schema,model,Types } from "mongoose";

//create card schema {product,count}
const cartSchema=new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product"  //name of the product model 
   },
    count:{
        type:Number,
        default:1
    },
})
//create user schema(username,password,email,age)
const userSchema=new Schema({
    //structure of user resource
    userName:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Min length of Username is 4 chars"],
        maxLength:[6,"Username size exceed 6 chars"]
    },
    password:{
        type:String,
        required:[true,"Password required"],
    },
    email:{
        type:String,
        required:[true,"Email required"],
        unique:[true,"email already exists"],   //not a validation rule
    },
    age:{
        type:Number,
   },
cart:[cartSchema] },   //can accept {product:"",count:2}
   {versionKey:false, timestamps:true,}
);


//generate usermodel
export const UserModel=model("user",userSchema)  //(string with singular,schema obj)