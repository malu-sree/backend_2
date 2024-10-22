const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
const port=9000
//mongodb connection using mongodb
const mongoose = require('mongoose');
main().catch(err=>console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/citytravel_db');
    console.log("database connected")
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

  const citySchema=new mongoose.Schema({
    name:{type:String},
    mobile:{type:String}
  },{timestamps:true})
  const cityModel=new mongoose.model("citytravel_tb1",citySchema)

//   cityModel.create({
//     name:"sara",
//     mobile:"120987654"
//   })
//mongodb end

//routing
const router=require('./routes/router')
app.use("/userrouter",router)

app.listen(port,()=>{
    console.log("server running http://localhost:9000")
})

