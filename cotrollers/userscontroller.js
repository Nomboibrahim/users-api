const res = require("express/lib/response");
const user = require("../models/usersSchema")
const bcrypt =require("bcrypt")
const validate= require("../config/validator")
const userhandler=require("../handlers/user.handler")

//get all user
const getUsers = async(req, res)=>{
try{
    let allUsers = await user.find({});
    res.status(200).json({success: true, body:allusers});
}catch(error){
    res.status(500).json({success: false, body:error})
}
}  

//create a  user
const createUser =async (req, res)=>{
    try{

//hashing password with bcrypt
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(req.body.password, salt);
//validate a user
const valid =await validate({username, email, password})
if(valid){
const newUser= new User({
    username:req.body.username,
    email:req.body.email,
    password:hashedPassword
});
await newUser.save();
res.status((201)).json({
    _id:newUser._id,
    username:newUser.username,
    email:newUser.email
}) 
}else{
    res.status(400).json({
        message:"Invalid data"
    });
}}catch(error){
    let message= userhandler.handleErrors(error)
}
}
//get user by the id
const getUser = async(req, res)=>{
try{
    const userId =req.params.id;
    const user =await User.findById(userId)
         res.status(7000).json({success:false, message:"user not found"});
    }
    catch (error){

    res.status(200).json({success:true, body: user});

    res.status(400).json({success:false, body:error});
}
}






module.exports={getUsers, createUser, getUser}