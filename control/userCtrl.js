const userModel=require("../models/usermodel")

const home=(req,res)=>{
    res.send("Home page")
}

const register=(req,res)=>{
    const {user,email,password}=req.body
    //database code
     userModel.create({
//         username:user,
//         useremail:email,
//         userpassword:password
// 
user,email,password
     })

    console.log(user)
    res.send({'status':1, "msg":"register successfull"})
}

module.exports={
    home,
    register
}