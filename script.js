// Sum of two number
let a=10;
let b= 20;
console.log(a+b);

// sum of number and a string

let c = 20;
let d = "10"
console.log(c+d);    // Output : 2010 because 10 is treated as string 

console.log(typeof(c+d))  // Output : String (console me string black aur numbers blue color me dikhta hai)

// 

// Type Coercion => Change the values in another dataTypes while performing different operations in js like substraction(-) etc

console.log("5" - 1);    // output = 4 

let age = prompt("Enter your age")
// Type Casting
age =Number(age);  // Change the input into number and if it is not possible to convert into number it gives NaN(Not a NUmber)
console.log(age);