/*
What you do not understand
1. Functions

*/
let firstNumber = 27;
let secondNumber = 30;

// let sumOfTwoNumbers = firstNumber + secondNumber;
// console.log(sumOfTwoNumbers);


// let fourtySeven = 47;
// let thirtyTwo = 32;
// let sum = fourtySeven + thirtyTwo;

AddTwoNumbers(firstNumber, secondNumber);
AddTwoNumbers(4980, 786885)

subtractTwoNumbers(27, 13)

let myname = WhatIsMyName("Tunmise");
let nyAge = WhatIsMyAge(45)

console.log(myname);
console.log(nyAge);
//console.log(`${myname} and ${nyAge}`);

//returns nothing
function AddTwoNumbers(firstNumber, secondNumber) 
{
    let sum = firstNumber + secondNumber;
    console.log(sum);    
}

function subtractTwoNumbers(bigNumber,smallNumber)
{
    let minus= bigNumber - smallNumber;
    console.log(minus);
}

//returns something
function WhatIsMyName(name) {
    return "my name is " + name;
    
}

function WhatIsMyAge(age)
{
    let anotherName = WhatIsMyName("Sade");

    return `my age is ${age} and dont twll me anything because ${anotherName}`
}

//another data type is boolean true or false
//another data type is null, undefined+


