const express=require("express");
app=express();
port=3049;
app.use(express.json());
app.get ("/server",(req,res)=>{
    console.log("yes");
    res.status(200).json({message:"runned"});
});
app.listen(port,()=>{
    console.log(`server running on the ${port}`);
});