"use strict";

// person object
const person = {
    name: "John Smith",
    age: 35,
    city: "London",
    favColor: "Green",

    greet() {
        console.log(`Hello, I am ${this.name}`);
    },
 
    // declare function property (defined outwith object later)
    sayFooBar: sayFooBarFunc,

    // nested hobbies object
    hobbies: {
        golf: "I have a golf handicap of 5",
        football: "I play right midfield for my football team",
        snooker: "my highest snooker break is 35"
    }   
};

// define new object method outwith the object after its creation (can use "this" keyword)
person.revealInfo = function () {
    const min = 0;
    const max = this.favMovies.length - 1;
    const myRand = Math.floor(Math.random() * (max-min+1)) + min;
    console.log(`My name is ${this.name}, I'm ${this.age} years old and I'm from ${this.city}`);
    // return a random movie from the array of movies
    console.log("One of my favorite movies is " + this.favMovies[myRand]);
};

//-- MAIN
// person general information
console.log("--person general information");
person.greet();
// add a favorite movie array property to the person object and populate it
person.favMovies = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"];
person.revealInfo();

// person hobbie information (nested hobbie object within person object)
console.log("\n--person hobbie information (nested hobbie object within person object)");
console.log(person.hobbies.golf);
console.log(person.hobbies.football);
console.log(person.hobbies.snooker);

//--Method testing
// deliberate error: 
// define new object arrow method outwith the object after its creation (cannot use "this" keyword here)
person.revealFavColorDeliberateError = () => {
    this.favColor;
    console.log(`DELIBERATE ARROW FUNCTION ERROR: The favorite color of ${this.name} is ${this.favColor}`);
};
// define a function that has already been declared in the object (this works)
function sayFooBarFunc() {
    console.log("foo bar!");
}
console.log("\n--method testing");
person.revealFavColorDeliberateError();
person.sayFooBar("foo bar");