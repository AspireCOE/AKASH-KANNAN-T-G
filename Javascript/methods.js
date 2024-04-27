const array_find = [1, 2, 3, 4, 5];
const foundElement = array_find.find(element => element > 2);
console.log(foundElement);

const array_filter = [1, 2, 3, 4, 5];
const filteredArray = array_filter.filter(element => element % 2 === 0);
console.log(filteredArray);

const array_map = [1, 2, 3, 4, 5];
const mappedArray = array_map.map(element => element * 2);
console.log(mappedArray);

const array_reduce = [1, 2, 3, 4, 5];
const sum = array_reduce.reduce((accumulator, element) => accumulator + element, 0);
console.log(sum); 

let arr= [1, 2, 3, "Akash", "Kannan", "Madurai"];

let splice= arr.splice(2,3);
console.log(splice); 

console.log(arr); 

arr.splice(3,0,"Arthur", "Leywin", "21"); 
console.log(arr);

arr.splice(1,1, 0); //Replacing items
console.log(arr); 

console.log(arr.includes("21"));  //Finding the item present in the arr or not

console.log(arr.indexOf("Arthur"));
console.log(arr.lastIndexOf("Leywin")); 