const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    user:{type:String},
    email:{type:String},
    password:{type:String}
},{timestamps:true})

const usermodel=new mongoose.model("user_tbl",userSchema)

module.exports=usermodel