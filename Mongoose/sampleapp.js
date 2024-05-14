var mongoose=require('mongoose')
var Schema=mongoose.Schema;
async function MongoConnect(){
var skillSchema=new Schema({
    skillName:String,
    experience:Number,
    proficiency:String,
})
var jobSeekerSchema=new Schema({
    jobSeekerName:String,
    emailId:String,
    age:Number,
    certified:Boolean,
    skills:[skillSchema]
})

var js=mongoose.model('jobseeker',jobSeekerSchema)
mongoose.connect("mongodb://127.0.0.1:27017/employee")
// var db=mongoose.connection;
var jobseeker1=new js({
  jobSeekerName:"jay",
  age:22,
  emailId:"jay@test.com",
  certified:true,
  skills:[{skillName:"java",experience:8,proficiency:"beginner"}],

})
jobseeker1.save();
const update=await js.updateOne({emailId:"jay@test.com"},{$set:{jobseekerName:"Aspire"}});
const res=await js.find({"skills.experience":{$lte:9}})
res.map(record=>console.log(record))
}
MongoConnect()
// js.find({},(err,data)=>{
//   if(err){
//     console.log("Error",err);
//   }
//   else{
//     console.log(data);
//   }
// })
// var cursor=js.find({})
//  cursor.forEach(record => {
//   console.log(record);
// });
// js.find({}).exec()

// jobseeker1.save()
//     // .then(savedJobSeeker => {
//     //     console.log("Jobseeker saved:", savedJobSeeker);
//     //     return jobseeker1.find({});
//     // })
//     .then(jobSeekers => {
//         console.log("All jobseekers:", jobSeekers);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });

