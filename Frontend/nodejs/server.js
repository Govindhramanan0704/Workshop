const express=require("express")
const cxndb=require("./dbms.js")
const app = express()
//while providing these, the order is mandatory
//comments used to install express"npm i express"
//comments used to install nodemon "npm i nodemon" which enables live server in nodejs
app.use("/night",(req,res)=>{//get can be instead of use
    res.send("Hello good night")
})
app.use("/afternoon",(req,res)=>{//route handler
    res.send("Hello good afternoon")
})
app.use("/morning",(req,res)=>{
    res.send("Hello good morning")
})
app.use("/",(req,res)=>{
    res.send("Hello")
})
app.listen("8875",(req,res)=>{
    console.log("Connection established");
})