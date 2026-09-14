// // Create a variable score using let with value 0, then update it to 10 and show it using alert().

let score = 0;
score = 10;
alert("Updated score ="  + score)


// // Store your name in a variable using const, then print alert("Hello " + name).


const username = "Daud"
alert("Hello " + username)


// // Ask the user's age using prompt(), store it in a variable, and show it using alert().

let age = prompt("Enter Your Age")
alert("Daud's age :" + age)


// // Write code that uses var, redeclares it, and check whether an error occurs or not.

var id = 10;
var id =20;


// // Take two numbers from the user using prompt() (in two separate variables), add them using +, and show the result using alert().

let num5 = Number(prompt("Enter num1"))
let num6 = Number(prompt("Enter num2"))
let sum3 = num5 + num6
alert("Sum of num5 & num6 is : " + sum3)


let num1 = "5";
let num2 = 3;
let sum1 = num1 + num2;
console.log(sum1);
//53 


var y = 10;
var y = 20;
console.log(y);
// //20


const num3 = "10";
const num4 = "20";
let sum = num3 + num4;
console.log(sum);
// //1020


let a = "5";
let b = Number("3");
console.log(a + b);
// //53


let x = 7;
{
  let x = 20;
  console.log(x);
}
console.log(x);
//7