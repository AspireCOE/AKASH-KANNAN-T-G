const os=require('os')
const user=os.userInfo()
console.log(user)
const uptime=os.uptime()
console.log(uptime)
console.log(os.arch())
console.log(os.release());