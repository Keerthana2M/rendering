const http =require("http");
const fs=require("fs");
const myserver =http.createServer((req,res)=>{
        console.log("hi keerthana");
        res.end("hi i am your browser what can help you keerthana");
    });
   
myserver.listen(3000,()=>   console.log("server running on the port")
);
