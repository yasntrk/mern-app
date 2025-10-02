const User = require('../models/Users')

exports.postUsers=async(req,res)=>{
    const {name,email,password}=req.body;
    try {
        const newUser= new User({name,email,password});
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({message:'Error creating user',error});
    }
}
exports.getUsers=async(req,res)=>{
    try {
        const users=await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:'Error fetching users',error});
    }
}