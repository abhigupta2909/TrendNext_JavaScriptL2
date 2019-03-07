// Topic 1: JavaScript Strings

// Assignment 1: Write a JavaScript function to split a string and convert it into an array of words

function splitToArray(string) {
    return stringArray = string.split('');    
}

stringToSplit = 'Abhishek'

// [ 'A', 'b', 'h', 'i', 's', 'h', 'e', 'k' ]
console.log(splitToArray(stringToSplit));

// Assignment 2: Write a JavaScript function to extract a specified number of characters from a string.

function getSubString(string, fromIndex, toIndex) {
    return string.slice(fromIndex, toIndex);
}
let text = 'Hello Abhishek';

// std output: Abhishek
console.log(getSubString(text, 6, text.length));


// Topic 2: JavaScript Numbers

// Assignment 1:Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

function convertTemp(tempValue, celsius = true) {
    if( celsius === true) {
        // convert Celsius to Fahrenheit
        return Math.round(tempValue * 9 / 5 + 32);
    } else {
        // convert Fahrenheit to Celsius
        return Math.round((tempValue -32) * 5 / 9);
    }
}

let celsiusData = 45
// 113 F
console.log(convertTemp(celsiusData));

let fahrenheitData = 113;
// 45 C
console.log(convertTemp(fahrenheitData, false));


// Topic 3: JavaScript Math
// Assignment 1: Write a JavaScript function to format a number up to specified decimal places.

function formatDecimal(num, decimalPlaces) {
    return num.toFixed(decimalPlaces);
}

// Std output: 75.142
console.log(formatDecimal(75.14235698, 3));


// Assignment 2: Write a JavaScript function to generate a random integer.

function randomUtils() {
    return Math.floor(Math.random() * 10);
}

// Generate random digit 
console.log(randomUtils());



// Topic 4: JavaScript Dates
// Assignment 1: Write a JavaScript function to test whether a date is a weekend or not.

function isWeekend(date) {
    let dayNumber = new Date(date).getDay();
    if(dayNumber < 6) {
        return false;
    } else {
        return true;
    }
}

// Returns true or false of the 
console.log(isWeekend('March 06, 2019'));


// Assignment 2: Write a JavaScript function to count the number of days passed since beginning of the year.\

function daysPassed() {
    let date = new Date();
    let current = date.getTime();
    let previous = new Date(date.getFullYear(), 0, 1);
  
    return Math.ceil((current - previous + 1) / 86400000);
  }
// 65
console.log(daysPassed());


// Topic 5: JavaScript Arrays
// Assignment 1: Write a JavaScript program to remove duplicate items from String type array (ignore case sensitivity).

let array = ['dog', 'cat', 1, 'dog', 3, 1, 4, 'cat'];
let uniqueArray = [] ;
array.forEach(element => {
    if(!uniqueArray.includes(element)) {
        uniqueArray.push(element);
    }
});

// [ 'dog', 'cat', 1, 3, 4 ]
console.log(uniqueArray);

// Assignment 2: Write a JavaScript function to get nth largest element from an unsorted array

function largestElement(list, index) {
    let tempList = list.sort().reverse();
    console.log(tempList);
    return tempList[index - 1];
}

let unsoetedArray = [1, 39, 20, 10, 50];

// 20
console.log(largestElement(unsoetedArray, 3));

// Topic 6: JavaScript Booleans & Type Of
// Assignment 2: Write a JavaScript function to check greatest of two numbers by using Boolean() function.

function largestNumber(num1, num2) {
    if(Boolean(num1 > num2)) {
        return num1;
    } else {
        return num2;
    }
}
// 10
console.log(largestNumber(5,10));


// Topic 7: JavaScript Type Conversion
// Assignment 2: Write a JavaScript function to convert given number to a string object and display.

function convertToString(num) {
    return new String(num);
}
// [String: '123']
console.log(convertToString(123));

// Topic 8: JavaScript Regular Expressions
// Assignment 2: Write a JavaScript function to check whether a given value is a valid url or not.

function urlValidation(url) {
    let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);
    
    if (url.match(regex)) {
        return 'valid'; 
    } else {
        return 'invalid';    
    }
}

const url1 = 'www.abc_123d.com';
const url2 = 'avbahsjojoppo'
// valid
// invalid
console.log(urlValidation(url1))
console.log(urlValidation(url2))

// Topic 9: JavaScript Form Validation
// Assignment 2: Write a JavaScript program to create a form with a text field to accept pin code. Write a pattern that validates pin code.

// <!DOCTYPE html>
// <html>
// <head>
// <script>
// function validatePinCode() {
//   let pin = document.forms["myForm"]["pin_code"].value;
//   let pattern =/^([0-9](6,6)+$/;
//   if (!pattern.test(pin)) {
//     alert("Pincode not correct");
//     return false;
//   }
// }
// </script>
// </head>
// <body>

// <form name="myForm"onsubmit="validatePinCode()" 

// method="post">
//   Pin Code: <input type="text" name="pin_code">
//   <input type="submit" value="Submit">
// </form>

// </body>
// </html>


// Topic 10: JavaScript HTML DOM
// Assignment 1: Write a JavaScript program to get the width and height of the window (any time the window is resized).

/*
<head>
<meta charset=utf-8 />
<title>Window Size : height and width</title>
</head>
<!-- Resize the window to see the output-->
<body onload="getSize()" onresize="getSize()">
<div id="size"> 
</div>
<body>
</body>
*/ 

function getSize()
{
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
        
 document.getElementById('size').innerHTML = "<h1>Width: " + width + " â€¢ Height: " + height + "</h1>";
}


// Assignment 2: Write a JavaScript program to change the background image of document.

function setBackground() {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('local.png')";
  }


// Topic 11: JavaScript Browser BOM
// Assignment 1: Create a basic page in html with an image in it. When the user clicks on the image, open a new
// tab or window that displays the Google home page. Add a form button beneath the image
// labelled 'Close'. When the button is clicked, the new tab or window should close.

// <!DOCTYPE html>
// <html>
// <body>

// <h2>HTML Image</h2>
// <img src="image.png" width="400" height="400" onclick="openWin()">
// <button onclick="closeWin()">Close</button>

// <script>
// var myWindow;

// function openWin() {
//   myWindow = window.open("www.google.com", "", "width=500,height=500");
// }

// function closeWin() {
//   myWindow.close();
// }
// </script>
// </body>
// </html>





// Assignment 2: Create a java script function to change the background colour of a paragraph based on input
// which is given by user through prompt dialog.

function changeBackground(clourToChange) {
    document.bgColor = clourToChange;
    document.getElementById("coltext").style.color = clourToChange;
}
