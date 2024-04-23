var event=require('events');
var emitter=new event.EventEmitter();
emitter.on('trackdelivery',()=>{

console.log("order out for delivery")

})


function deliveryStatus(){
    console.log("Please wait for the delivery status. we are loadin");

    console.log("final status");
    emitter.emit('trackdelivery');
}

deliveryStatus()


var cluster=require('cluster');
var http=require('http');
var cpus=require('os').cpus.length;
if(cluster.isMaster){
    masterprocess()
}
else{
    childProcess()
}

function masterprocess(){

    console.log(`Master ${process.pid} is running`)

    for(let i=0;i<cpus;i++){
        console.log(`forking process number ${i}`);
        cluster.fork();
    }

    process.exit();
}


function childProcess(){
console.log(`child ${process.pid} started and completed`);
process.exit();
}
