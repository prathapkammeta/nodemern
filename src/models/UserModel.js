const mongoose= require("mongoose");
const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    phone:Number
})
module.exports=mongoose.model("User",userSchema)