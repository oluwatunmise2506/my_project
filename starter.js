

//In all programming languages, we have many data types
//JavaScript is a programming langugage.
//In JavaScript, we have properties and functions (or methods).
//we call a method by adding parenthesis (); 

//data types are forms which data can exist. They are used to represent the type of propertues

//number --> //integer //int
//Date & time --> Date or DateTime 
//text --> string
//object ---> object
//collection ---> array

//how to declare a data type

//string
let name = "Tunmise"
//number/int
let age = 28
//date
let today = new Date(2022, 11, 8)
//object

let dog = {

    name: "jack",
    breed: "german shepherd",
    number_of_eyes: 2,

    benefit: ["security", "cuteness", "sale"],

    smiley: "🐶"
}

//array

let fruits = ["🥭", "🍊", "🍎", "🍌"]


//functions

//functions are behaviours. They tell a program what to do and how to do it. Every program has a function.
//this is how to declare a function in JavaScript
function TellMeSomething(){
    
}

TellMeSomething();

console.log("heyyy I am learning Javascript")
console.log(name);

let myAddition = 2 + 2

console.log(myAddition);


function MyName() {
    return  "Temitope"
}


let topesName = MyName();

console.log(topesName);

function AddTwoNumbers(number1, number2) {
    sum = number1 + number2;
    return sum;
}

//write a program that adds up 490 and 5463663

let addition = AddTwoNumbers(490, 5463663)

console.log("the summation of the two numbrs", addition);


console.log("my dog's name is", dog.name);  

let myself ={
    name:"adeola",
    city:"lagos",
    school:"futa"

}
console.log("my name is",myself);

console.log(dog.benefit);
