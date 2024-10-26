const express=require("express");
const connectDB=require("./config/database.js")
const usermodel=require("./config/user.js");

const app=express();

app.post("/user",async(req,res)=>{
   const user=new usermodel({
    firstName:"hari",
    lastName:"K",
    emailId:"hari@gmail.com",
    password:"Hari@123"
   })
   await user.save()
   res.send("inserted");
})

app.get("/about",(req,res)=>{
    res.send("about");
})

app.get("/",(req,res)=>{
    res.send("home");
})


connectDB()
.then(()=>{
    app.listen("8000",()=>{
        console.log("server is running")
    })
})
.catch(()=>{
    console.log("db not connected ")
})
