const User= require('../models/UserModel');

const createUser= async (req,res)=>{
    const{username,email,phone}=req.body;

    const newUser=new User({
        username,
        email,
        phone
    })
    try {
        await newUser.save();
        res.status(200).send("User saved");
        
    } catch (error) {
        
        console.error(error);
        res.status(500).send("Error saving in User");
    }
}
//get All users


const getAllUsers=async(req,res)=>{

    try {
        
        const users=await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send("Error getting  in User");
        
    }
}

//get single user 


const getSingleUser=async(req,res)=>{

    try {
        const userId=req.params.id;

        const user=await User.findById(userId);
        if(user){
            res.status(200).json(user);

        }
        else {
                res.status(400).send("user not found")
        }
    } catch (error) {
        res.status(500).send("Error getting  in User");
        
    }

}

//update user 



const updateUserById=async(req,res)=>{
    
    const userId=req.params.id;
    const{username,email,phone}=req.body;
    try {
        const updateUser=await User.findByIdAndUpdate(
            userId,
            {username,email,phone},
            {new:true}
        )
        if(updateUser){
            res.status(200).json("updated user")
        }
        else {
            res.status(404).send("user not found")
        }
    } catch (error) {
        res.status(500).send("cant not update   in User");
        
    }
}
//delete user 

const deleteUserById=async(req,res)=>{

    const userId=req.params.id;
    try {
        const deleteUser=await User.findByIdAndDelete(userId)
        if(deleteUser){
            res.status(200).send("user deleted")
        }
        else {
            res.status(404).send("user not found id ")
        }
        
    } catch (error) {
        res.status(500).send(" user not delete")
    }
}
module.exports={
    createUser,getAllUsers,
    getSingleUser,
    updateUserById,
    deleteUserById
}