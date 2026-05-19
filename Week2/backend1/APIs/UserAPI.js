//create mini express app(separate route)
import exp from 'express'
export const userApp=exp.Router()



//Create API(REST API- REpresentational State Transfer API)
let users=[]

//route to handle GET req of client (http://localhost:6000/users)  path cannot be verb
userApp.get('/users',(req,res)=>{
    //send res to client
    res.json({message:"all users",payload:users})
})

//GET user by id
userApp.get('/users/:id',(req,res)=>{
      //get id of user from url parameter
     let idOfUrl=Number(req.params.id)  //{id:'5'}
     //find index of user
     let index=users.find(userObj=>userObj.id===idOfUrl)
     //send res
     if(users===undefined){
          return res.json({message:"User not found"})
     }
     res.json({message:"a user",payload:users})
})


//route to handle POST req of client
//get user from client,
userApp.post('/users',(req,res)=>{
    const newUser=(req.body)
    users.push(newUser)
     res.json({message:"User created"})
})



//route to handle PUT req of client
userApp.put('/users',(req,res)=>{
     //get modified user from client
     let modifiedUser=req.body;
     //get index of existing user
     let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
     //if user not found
     if(index===-1){
          return res.json({message:"User not found"})
     }
     //update user with index
     users.splice(index,1,modifiedUser)
     //send res
     res.json({message:"User updated"})
})




//route to handle DELETE req of client
userApp.delete('/users/:id',(req,res)=>{
     //get if of user from url parameter
     let idOfUrl=Number(req.params.id)  //{id:'5'}
     //find index of user
     let index=users.findIndex(userObj=>userObj.id===idOfUrl)
     //if user not found
      if(index===-1){
          return res.json({message:"User not found to delete"})
     }
     //delete user with index
     users.splice(index,1)
     //send res
     res.json({message:"User removed"})
})
    