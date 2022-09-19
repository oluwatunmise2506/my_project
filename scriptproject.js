//boolean
// = is used to assign/set/pass value into a variable
// == operator is used to check the equaity of two values
// ! not
// | or || or
// & or &&
// let x = 1;
// let y = 2

// let areValuesEqual = x == y;

// if(areValuesEqual){
//     console.log("the values are equal");
// }
// else{
//     console.log("the values are not equal");
// }

// let myName = "Tunmise";
// let charInMyName = myName.length
// console.log(`the count of chars in my name is ${charInMyName}`);


function areaOfaSquare(length, breath)
 {
    product= length * breath;
    return product
}

function mouseover() {
    document.getElementById("boldtext").style.color="pink"
    
}

let myBoldText = mouseover
console.log("myBoldText");

 
function getAreaOfSquare() {
    let lengthValue = document.getElementById("length").value; //get the value in the first input text
    let breadThValue = document.getElementById("breadth").value //get the value in the seconmd input text

    let shapeIsSquare = lengthValue == breadThValue;

    if (lengthValue && breadThValue) {

        if (shapeIsSquare) {
            let areaOfSquare = areaOfaSquare(lengthValue, breadThValue) //call function that calculates the area
        
            let areaSpan = document.getElementById("areaValue"); //get the span that holds the area
            areaSpan.innerText = areaOfSquare; //set the inner text of the span
        } else {
            alert("incorrect chararctiess of a square")
        }

    } else {
        alert("please enter a value in the boxeso")
    }

    

    
}

function areaOfaTriangle(height, base)
 {  
    solution = 1/2 * base * height  
    return solution
}

function getAreaOfTriangle() 
{
    let heightValue = document.getElementById("height").value;//get the value in the first input text
    let basevalue = document.getElementById("base").value;//get the value in the second input text
    
    let baseNumber = basevalue == 8 && heightValue <= 20;
    if (baseNumber) {
        let triangleArea = areaOfaTriangle(heightValue,basevalue); //call the function that calculates the area

    let triangle = document.getElementById("triangleSpan"); //get the span that holds the area
    triangle.innerText = triangleArea;
        
    } else {
        alert("the base value is 8")
        
    }

    
}

function getAreaOfRectangle()
 {
    let valueOfLength = document.getElementById("rectangleLength").value;//get the value in the first input
    let valueOfBreadth = document.getElementById("rectangleBreadth").value;//get the value in the second input

    let rectangleArea = areaOfaSquare(valueOfLength,valueOfBreadth);//call the function that calculates the area
    let rectangle = document.getElementById("rectangleSpan");//get the span that holds the area
    rectangle.innerText = rectangleArea;
    
}
function fullName(firstName, lastName)
 { 
    userName = firstName && lastName;
    return userName;
 }    


function LoginForm()
 {
    let firstNameInput = document.getElementById("fName")
    let firstName = firstNameInput.value; //get theh first name
    let lastName = document.getElementById("lName").value; //get the last name
    
    //declare minimum chars
    let minimumCharCount = 5;

    //check if the no of char of first name is greater or equal to 5
    //get the length of firstname value

    let firstNameValue = firstName.length
    let isFirstNameLessThan5 = firstNameValue < minimumCharCount

    if(!isFirstNameLessThan5)
    {
        alert("heyyeyeyeyeyeye")
    }
    else{
        firstNameInput.style.border = "2px solid red"
        console.log("heyyy");
    }
}

function ValidateInput() {
    console.log("heyyyy");

    let firstNameInput = document.getElementById("fName")
    let firstNameValue = firstNameInput.value; 
                        
    let isFirstNameLessThan5 = firstNameValue < 5

    if(isFirstNameLessThan5)
    {
        firstNameInput.style.border = "2px solid red"
    }
}
 
function Change(Doit) 
{
    document.getElementById("paragraph").value = "It is good to be good"
}
console.log("ABCDEF". split(""));

function switchImage() 
{
    document.getElementById("image").scr ="../darkmode"
    document.getElementById("image").style.width = "50px"
    
}

function changeImage() 
{
    document.getElementById("image").src ="../lightmode"
    
}

function changeText()
{
    document.write("Peter Obi for President")
}

window.alert("omo, i just dey learn coding ooo,so mafo😎")

let x = 7; //assign value to the variable
x++;
let z = x;
console.log(z);

let y = 12e7
console.log(y);
function mytexts() {
    let instruction = "Drop your bag before entering!";
    return instruction;
}
document.getElementById ("text").innerHTML = mytexts();
document.getElementById("text").style.color = "red"
document.getElementById("text").style.fontSize = "20px"

let Foods = {swallow : "eba" , grain : "rice" , cereal : "oat"};
console.log(Foods.swallow);
document.getElementById("myFav").innerHTML = "i love " + Foods.cereal + " and " + Foods.swallow ;
console.log(Foods.swallow.slice (0,4));

let composition = "The lord is my \"shepherd\",i shall not want.i have decideds to follow  jesus,no turning back no running back." + 
"like bro,i need like 2k asap😋 "
document.getElementById("mylength").innerHTML = composition.length
document.getElementById("splitWords").innerHTML = composition . slice(14,38)
document.getElementById("splitWords").style.color = "blue"

function changecase()
 {
    let thisText ="i love to eat apples and bannans"
    document.getElementById("texttwo").innerHTML = thisText.toUpperCase()
 }
function replaceWord() {
   let TheText = document.getElementById("change").innerHTML
   document.getElementById("change").innerHTML = TheText.replace(/day/g , "month")
}

    let myname = "ikusika oluwatunmise adesola";
    console.log(myname.toUpperCase())
    console.log(myname.replace("adesola","mary"));


    let school = "           St. Marys Catholic School Oyemekun Road Akure        "
    let School = school . trim()
    let thenumber = school.length
    let mynumber = School . length
    console.log(School);
    console.log(thenumber);
    console.log(mynumber);


let thispad = "the goat"
solvepad = document.getElementById("padding").innerHTML = thispad.padEnd(13 ," boy");  
console.log(thispad[7]);
console.log(thispad.charAt(0));


let FavSport = "i love football and football pitch"
console.log(FavSport.lastIndexOf("football"));