// let myText = "Members Loggggind"; //declare a text variable

// let tunmiseTag = getElementById("form-title"); //get the element we want to set its text

// tunmiseTag.innerText = myText //set the text



// let theText = "My div today";

// let ourTag = document.getElementsByClassName("this-div");

// ourTag[0].innerText = theText;

// // let myArray = [1, 2, 3, 4]

// // console.log(myArray.length);
// // console.log(myArray[2]);

// let yourText = "Not more than eight words";

// let userText = getElementById("username")

// userText.setAttribute("placeholder", yourText)

// let submitValue =  "Login";
// let submitTag = getElementById("my-submit");
// submitTag.setAttribute("value", submitValue);

let anchorLink = getElementById("my-link")
anchorLink.setAttribute("href", "http://google.com");

function getElementById(id) {
    let element = document.getElementById(id);
    return element;
}

function displayPopup(myMessage) {
    alert(myMessage)
}



