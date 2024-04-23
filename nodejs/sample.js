var express=require("express")
var server=express();
server.get("/",(request,response)=>{
    response.sendFile("express")

})
server.listen(3000,()=>{
console.log("Hi")
})