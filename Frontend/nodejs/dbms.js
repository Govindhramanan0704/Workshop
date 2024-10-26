const mongodb=require("mongoose")
async function cxndb() {
    await mongodb.connect("mongodb://localhost:27017/")
    console.log("MongoDB")
}
module.exports=cxndb;