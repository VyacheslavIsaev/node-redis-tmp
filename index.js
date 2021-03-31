const express=require("express");

const PORT=8080;
const app = express();

app.get("/", (req, res)=>{
    console.log(req.method+" from IP:"+req.ip);
    res.send("Hi there!");    
});

app.listen(PORT, ()=>{
    console.log("Listening on port: "+PORT);
});
