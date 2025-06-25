let score = "33";
let name = "Black Panther"

console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log(typeof name);
let valueInNumber2 = Number(name);  //returns NaN(Not a Number because name cannot be changed into number)
console.log(valueInNumber2)
console.log(typeof valueInNumber2);

/*
"33" => 33
"Black Panther" => NaN
true => 1
false => 0
*/

let isLoggedIn = 1;
let boolean = Boolean(isLoggedIn);
console.log(boolean);

/*
1 => true
0 => false
"" => false
"City" => true
*/