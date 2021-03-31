const express = require("express");
const redis   = require("redis");
const process = require("process");

const PORT=8080;
const VISITS="visits";

const app = express();


const client = redis.createClient({
    host: "redis-server",
    port: 6379
});
client.set(VISITS, 0);

app.get("/", (req, res)=>{
    console.log(req.method+" from IP:"+req.ip);
    client.get(VISITS, (err, visits)=>{
        res.send("Total number of visits from start:"+visits);
        client.incr(VISITS);
    });
});

app.get("/stop", (rew, res)=>{
    process.exit(3);
});

app.listen(PORT, ()=>{
    console.log("Listening on port: "+PORT);
});
