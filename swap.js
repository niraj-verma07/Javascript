// Swapping of numbers in 3 methods

// 1st Method (with 3 variable)

let a =10;
let b =20;

let swap = a; // swap = 10
a = b; // a = 20, b =20
b = swap // b = 10

console.log(a);
console.log(b);

// 2nd Method

let c = 30;
let d = 50;

c = c + d; // 30+50 = 80
d = c - d; // 80 - 50 = 30
c = c - d; // 80 - 30 = 50

console.log(c); // 50
console.log(d); // 30

// 3rd Method
let e = 10;
let f = 60;
[e,f] = [f,e];

// How it works  (destructuring)
// let box1 = e; // 10
// let box2 = f; // 60

// You create a new box: [60, 10]
// [e, f] = [box2, box1];

console.log(e); // 60
console.log(f); // 10

//Unary Operator

let n = true;   // js converts true into 1 and perform post increment
n++;
console.log(n);

// We cannot increment or decrement any number directly
// let m = 11++;
// console.log(m)

console.log(Math.round(10.5));   // Rounds to the nearest integer → 11
console.log(Math.ceil(11.8));    // Rounds **up** to the next integer → 12
console.log(Math.floor(9.5));    // Rounds **down** to the previous integer → 9
console.log(Math.trunc(10.5));   // Removes the decimal part (just keeps the integer) → 10
console.log(Math.pow(10,2));      // Incorrect usage: Math.pow needs two arguments → NaN
console.log(Math.sqrt(12));      // Returns square root of 12 → approx. 3.464
console.log(Math.abs(-15));      // Returns absolute value (positive version) → 15
console.log(Math.max(5, 10, 20));  // Returns the highest number → 20
console.log(Math.min(5, 10, 20));  // Returns the lowest number → 5
console.log(Math.random());        // Returns a random number between 0 (inclusive) and 1 (exclusive)

let x = 10.9857
console.log(x.toFixed(2)); // returns reduired digits from points


// OTP Generator

console.log(Math.trunc((Math.random()*9000)+1000));

// Area and perimeter of rectangle
//Area
let length = 15;
let bredth = 20;
console.log(length*bredth);
//Perimeter
console.log(2*(length+bredth));

//Area of triangle by heron's formula

let side1 = 10;
let side2 = 15;
let side3 = 20;

let semi = (side1+side2+side3)/2;
let Area = Math.sqrt(semi*(semi - side1) * (semi - side2) * (semi - side3));
console.log(Area)

// Circumference of circle

let radius = 10;
console.log(2*Math.PI*radius);

// Valid Voter

let age = "hey";

if(isNaN(age) === true){
    console.log("Not Valid age")
}
else if(age>=18){
    console.log("You can Vote");
}else{
    console.log("You cannot Vote");
}

//