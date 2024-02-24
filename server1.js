const express=require("express");
port=3100;
 const app=express();
app.use(express.json());
app.use("/server",require("./routers/router"));
app.listen(port,()=>{
    console.log("server running on port");

});

