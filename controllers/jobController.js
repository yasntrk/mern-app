const Jobs=require("../models/Jobs");

exports.getJobs=async(req,res)=>{
    try {
        const jobs=await Jobs.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

exports.postJobs=async(req,res)=>{
    try {
        const job=await Jobs.create(req.body);
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

exports.getAllJobs=async(req,res)=>{
    try {
        const jobs=await Jobs.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}