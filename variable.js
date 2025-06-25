const name = 'Niraj'; // Const variables are not allowed to change
let age = 20;
var location = "Ranchi, Jharkhand"; // prefer not to use var because of issue in block scope and functional scope

let emailId;

console.log(name);
console.log(age);
console.log(location);

console.table([name, age, location, emailId]); // Prints the data in table

//Numbers => 2 to the power 53
// bigInt
// string => " " or ''
// boolean => true or false

console.log(typeof(null)); // object
console.log(typeof(undefined)) //undefined