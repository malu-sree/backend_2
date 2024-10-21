const home=(req,res)=>{
    res.send("Home page")
}

const register=(req,res)=>{
    const {user,email,password}=req.body
    console.log(user)
    res.send({'status':1, "msg":"register successfukk"})
}

module.exports={
    home,
    register
}