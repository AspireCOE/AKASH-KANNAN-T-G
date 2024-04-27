class Employee {
   public empId: number;
   public empName: string;

   constructor(empId: number, empName: string) {
       this.empId = empId;
       this.empName = empName;
   }

   displayRecord(): void {
       console.log(this.empId);
       console.log(this.empName);
   }
}

let employee = new Employee(10, "Akash");
employee.displayRecord();

let products:Array<String>=["car","mobile","laptop"];
for(let i=0;i<products.length;i++)
   {
console.log(products[i]);
   }

   let arr:string[] | number[]
   arr=["Akash","Kannan","Arthur","Agrona"];
   console.log(arr)
   console.log(typeof(arr));


var person = {
    firstName:"Daniel", 
    lastName:"Park", 
    sayHello:function() {  }  //Type template 
 } 
 person.sayHello = function() {  
    console.log(person.firstName+person.lastName)
 }  
 person.sayHello()

 var details = { 
    firstname:"James", 
    lastname:"Lee" 
 }; 
 var invoke = function(obj) { 
    console.log("first name :"+obj.firstname) 
    console.log("last name :"+obj.lastname) 
 } 
 invoke(details)

 let ordersperday:Array<number>=[34,30,43,29,52,21];
 let orderperweek=0;
 function total(ordersperday){
   for(let i=0;i<ordersperday.length;i++)
      {
         orderperweek+=ordersperday[i];
      }
      console.log(orderperweek);
 }
 total(ordersperday);






