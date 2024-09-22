"use strict";

console.log("---------- (1) Array films");
let myArr = ["IT", "ET", "10", "Ted", "Up"];
myArr.push("Top Gun");
myArr.push("Star Wars");
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}

console.log("---------- (2) random numbers to array");
let rangeLow = 1;
let rangeHigh = 100;
for (let i = 0; i < 10; i++) {
    let randNo = Math.floor(Math.random() * (rangeHigh - rangeLow + 1)) + rangeLow;
    console.log(randNo);
}

console.log("---------- (3) count backwards from 20 to 0");
for (let i=20; i>=0; i--) {
    console.log(i);
}

console.log("---------- (4) generate 5 random numbers in range 1-50, report if number divisible by 5");
rangeLow = 1;
rangeHigh = 50;
for (let i = 0; i < 5; i++) {
    let randNo = Math.floor(Math.random() * (rangeHigh - rangeLow + 1)) + rangeLow;
    let divisibleBy5 = randNo%5===0 ? true : false;
    if (divisibleBy5===true) {
        console.log(randNo+": is divisible by 5");
    }
    else {
        console.log(randNo+": is not divisible by 5");
    }
}

