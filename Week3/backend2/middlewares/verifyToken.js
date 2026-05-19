import jwt from "jsonwebtoken"
const {verify}=jwt

export function verifyToken(req,res,next)
{
    // token verification logic
    const token = req.cookies?.token
    console.log(token)
    // if req from unauthorized user
    if(!token)
    {
        return res.status(401).json({message:"Plz Login"})
    }
    try{
    // if token is existed
    const decodedToken=verify(token,"abcdef")

    console.log(decodedToken)
    req.user=decodedToken
    next()
    }catch(err)
    {
     res.status(401).json({message:"session expired. pls relogin"})
    }
}
