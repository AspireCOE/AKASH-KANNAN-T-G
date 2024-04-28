const express=require('express')
const server=express()
const axios=require('axios')
const bodyparser=require('body-parser')
server.use(bodyparser.urlencoded({ extended: false }));
server.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

server.post("/submit",(req,res)=>{
    const { username, password, mobile, email } = req.body;
    const userdata={
        username,
        password,
        mobile,
        email
    }
    axios.post("http://localhost:3000/users",userdata).then(data=>res.send("data has been saved")).catch(err=>console.log(err))
    
})
server.get("/getuser",(req,res)=>{

    axios.get("http://localhost:3000/users").then(dbresponse=>{
        res.json(dbresponse.data)
    }).catch(err=>{
        console.log(err)
    })
})

server.post("/changepassword",(req,res)=>{
    const{id,password}=req.body
    const pass={password}
    axios.patch(`http:localhost:3000/users/${id}`,pass).then(data=>res.send("data updated")).catch(err=>console.log(err))
})
server.listen(5000,()=>{
    console.log("server is listening")
})