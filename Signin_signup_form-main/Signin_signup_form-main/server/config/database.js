const mongoosh=require("mongoose");

async function connectDB()
{
    await mongoosh.connect("mongodb://localhost:27017/user");
    console.log("mongodb connected");
}
module.exports=connectDB;