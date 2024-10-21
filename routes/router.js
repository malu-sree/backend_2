const express=require('express')
const {home,register}=require("../control/userCtrl")
const router=express.Router()
router.route("/").get(home)
router.route("/register").post(register)
// const router=express.Router()
// router.route("/").get((req,res)=>{
//     res.send('Home page')
// })
// router.route("/register").post((req,res)=>{
//     const {user,email,password}=req.body
//     console.log(user,email)
//     res.send({'status':1,'msg':'register successfully'})
// })

module.exports=router