"use strict";

console.log("--------- (1) Age check");
let age = 20;
console.log(`age is: ${age}`);
if (age < 18) {
    console.log("Sorry, I cannot serve you alcohol");
}
else {
    console.log("No problem, what would you like to drink?");
}

console.log("\n---------- (2) Password length");
let pass = "Password";
let passLen = pass.length;
console.log(`password length = ${passLen}`);
if (passLen > 8) {
    console.log("password length is greater than 8");
}
else {
    console.log("password is too short");
}

console.log("\n---------- (3) Divisible by 3 or 5");
let val = 16;
console.log(`number is ${val}`);
if (val%3===0 || val%5===0) {
    console.log("This number is divisible by 3 or 5");
}
else {
    console.log("This number is not divisible by 3 nor 5");
}

console.log("\n---------- (4) Fizz buzz");
let theNum = 15;
console.log(`theNum = ${theNum}`);
if (theNum%3===0 && theNum%5===0){
    console.log("fizz buzz");
}
else if (theNum%3===0){
    console.log("fizz");
}
else if (theNum%5===0){
    console.log("buzz");
}