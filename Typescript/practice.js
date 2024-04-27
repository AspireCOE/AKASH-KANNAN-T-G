var Employee = /** @class */ (function () {
    function Employee(empId, empName) {
        this.empId = empId;
        this.empName = empName;
    }
    Employee.prototype.displayRecord = function () {
        console.log(this.empId);
        console.log(this.empName);
    };
    return Employee;
}());
var employee = new Employee(10, "Akash");
employee.displayRecord();
var products = ["car", "mobile", "laptop"];
for (var i = 0; i < products.length; i++) {
    console.log(products[i]);
}
var arr;
arr = ["Akash", "Kannan", "Arthur", "Agrona"];
console.log(arr);
console.log(typeof (arr));
var person = {
    firstName: "Daniel",
    lastName: "Park",
    sayHello: function () { } //Type template 
};
person.sayHello = function () {
    console.log(person.firstName + person.lastName);
};
person.sayHello();
var details = {
    firstname: "James",
    lastname: "Lee"
};
var invoke = function (obj) {
    console.log("first name :" + obj.firstname);
    console.log("last name :" + obj.lastname);
};
invoke(details);
var ordersperday = [34, 30, 43, 29, 52, 21];
var orderperweek = 0;
function total(ordersperday) {
    for (var i = 0; i < ordersperday.length; i++) {
        orderperweek += ordersperday[i];
    }
    console.log(orderperweek);
}
total(ordersperday);
