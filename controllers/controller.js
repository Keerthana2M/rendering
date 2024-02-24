const express=require("express");
const one=(req,res)=>{
   res.status(200).json({message:"hi i am your geeting"});

}
const two =(req,res)=>{
    console.log(req.body);
    res.status(201).json({message:"hi i am your posting "});
   

}
const three=(req,res)=>{
    res.status(202).json({message:"hi am your deleting"});
}
const four =(req,res)=>{
    res.status(203).json({message:"hi am your putting"});
}
module.exports={one,two,three,four}