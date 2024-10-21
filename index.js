const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
const port=9000
//routing
const router=require('./routes/router')
app.use("/userrouter",router)

app.listen(port,()=>{
    console.log("server running http://localhost:9000")
})