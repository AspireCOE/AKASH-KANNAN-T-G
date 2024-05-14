const MongoClient=require('mongodb').MongoClient;
const url='mongodb://127.0.0.1:27017/';
const client=new MongoClient(url);
async function connectTodb(){
    try{
     await client.connect();
     const db=client.db('employee');
     const collection=db.collection('details');
     const cursor=collection.find();
     //insertOne
        /* const result= await collection.insertOne(
           _id: 7,
  firstName: 'Akash',
  lastName: 'B',
  gender: 'male',
  email: 'akash.b@abc.com',
  salary: 8000,
  department: { name: 'Marketing' }
              )
         console.log("the record inserted into the collection with"+ackresult);
 */

         //insertMany
        /* const result= await collection.insertMany(
         [   { _id: 8,
  firstName: 'Kannan',
  lastName: 'B',
  gender: 'male',
  email: 'kannan.b@abc.com',
  salary: 9000,
  department: { name: 'HR' }},
            {_id: 9,
  firstName: 'Jay Jo',
  lastName: 'B',
  gender: 'male',
  email: 'amitabh.b@abc.com',
  salary: 7000,
  department: { name: 'Finance' }},

       ] )
        console.log("the record inserted into the collection with"+result); */



        //updateOne
        /* const result= await collection.updateOne(
            {_id: '_8'},
             { $set: { lastName:"T" } }
 
         )
         console.log("the record updated into the collection with"+result); */
   

         //updateMany
        /*  const result= await collection.updateMany(
            {email: 'amitabh.b@abc.com'},
             { $set: { salary:"10000" } }
 
         )
         console.log("the record updated into the collection with"+ackresult); */
         

         //deleteOne
         /* const ackresult= await collection.deleteOne(
            {_id: '_8'}            
 
         )
         console.log("the record deleted into the collection with"+ackresult); */
     await cursor.forEach(record => {
        console.log(record);
     });
     await client.close();
    }
    catch(err){
   console.log('Error connecting to db',err);
    }
}
connectTodb()