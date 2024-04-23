const fs=require('fs')
const first=fs.readFileSync("./content/first.txt","utf-8")
const second=fs.readFileSync("./content/second.txt","utf-8")
console.log(first)
console.log(second)
//fs.writeFileSync("./content/third.txt","This the third file")
fs.readFile("./content/first.txt",'utf-8',(err,data)=>{
    if(err)
    {
        console.log("error")
        return
    }
    const f=data
    fs.readFile("./content/second.txt",'utf-8',(err,data)=>{
        if(err)
        {
            console.log(err)
            return
        }
        const s=data
        fs.writeFile("./content/result.txt",`${f},${s}`,(err,data)=>{
            if(err)
            {
                console.log(err)
                return
            }
            console.log(data)
        })
    })
})
