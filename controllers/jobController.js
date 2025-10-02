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

exports.fetchSingleJob=async(req,res)=>{
    try {
        const job=await Jobs.findById(req.params.id);
        if(!job){
            return res.status(404).json({message:"Job not found"});
        }
        res.status(200).json(job);    
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

exports.updateJob=async(req,res)=>{
    try {
        const job=await Jobs.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!job){
            return res.status(404).json({message:"Job not found"});
        }
        res.status(200).json(job);    
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

exports.deleteJob=async(req,res)=>{
    try {
        const job=await Jobs.findByIdAndDelete(req.params.id);
        if(!job){
            return res.status(404).json({message:"Job not found"});
        }
        res.status(200).json({message:"Job deleted successfully"});    
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}