const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String
    },
    password:{
        type:String
    }
})

const usermodel=mongoose.model("register",userSchema);

module.exports=usermodel;