"use strict";

// functions
const sayHi = (name) => {
    console.log("Hello "+name);
};

const oddEven = (num) => {
    const str = (num%2===0) ? " is an even number" : " is an odd number";
    console.log(num + str);
};

const atm = (inputPin, withdrawalRequest) => {
    const userPin = 1234;
    let amountInAccount = 100;

    if (inputPin===userPin){
        console.log("pin is correct");
        console.log(`you have £${amountInAccount} in you account`);
        console.log(`you have requested to withdraw £${withdrawalRequest}`);
        if (withdrawalRequest <= amountInAccount) {
            console.log(`issuing £${withdrawalRequest}`);
            console.log(`new balance is £${amountInAccount-withdrawalRequest}`);
        } else {
            console.log("sorry, requested withdrawl amount (£" + withdrawalRequest +
                ") exceeds available funds (£" + amountInAccount + ")");
        }
    } else {
        console.log("wrong input pin, transaction declined");
    }
    console.log("--");
};


// main code
console.log("\n---------- (1) Greeting");
const myName = "Spartacus";
sayHi(myName);

console.log("\n---------- (2) Odd or even");
const num = 9;
oddEven(num);

console.log("\n---------- (3) ATM");
// pin is 1234 and there is £100 in the account
atm(1234, 20);
atm(1234, 101);
atm(9999, 10);