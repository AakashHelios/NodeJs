const express= require('express');
const app=  express();
const port=5000;
const sendmail=require("./sendmail");
app.get("/",(req,res)=>{
res.send("home page")
})

app.get("/mail",sendmail)

const start =async ()=>{
    try {
        app.listen(port,()=>{
            console.log(`im on the port ${port}`);
        })
    } catch (error) {
        
    }

};
start();