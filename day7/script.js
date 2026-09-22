// //funtions

// function abc(){
//     console.log("Hello");
// }
// abc();


// // Q1:Guess output

// hello();
// function hello(){
//     console.log("Hello g");
// }//Hello g


// //Q2:Convert this function into arrow function
// //funtction mul(a,b){
// //return a* b
// //}

// let fun = (a,b)=>{
//     return a*b;
// }

// //Q3:Identify parameters,and arguments in this funtion
// function welcome(name){//this name is parameter
//     console.log(name);
// }
// welcome("daud");//this val is argument


// //Q4:Guess output
// function sayHi(name = "Guest"){
//     console.log("Hi",name);
// }
// sayHi();//Hi Guest //default value


// //Q5:use rest 
// function ab(a,b,...val){
//     console.log(a,b,val)
// }
// ab(1,2,3,4,5,6);

// //Q6: Retun value of this function
// function f(){
//     return;
// }
// console.log(f());//undefined

// //Q7: Pass a function into another function and execute it

// function ui(val){
//     val();

// }
// ui(function(){
//     console.log("second funtion");
// })

// //Q8: pure or impure function
// let total = 1;
// function tot(num){
//     return total = total + num
// }
// console.log(tot(3));//impure

// //Q9:Closure

// function ist(){
//     let a = 10;
//     return function(){
//         console.log("value of parent funtion",a);

//     }
// }
// let value = ist();
// console.log(value);//function
// value();//inner function




//Question Claude

//Q1: Write a function greet() that prints "Hello World" when called.
function greet(){
    console.log("Hello World");
}
greet();

//Q2: Write a function add(a, b) that takes two numbers as parameters and returns their sum. Call it and print the result.
function add(a,b){
    return a+b;
}
let ans = add(5,5);
console.log(ans);

//Q3:Guess the output:
function square(num) {
    return num * num;
}
console.log(square(5));// 5 * 5 = 25
console.log(square());// undefined * undefined = nan


//Q4: Write a function isEven(num) that returns true if the number is even, false if odd.
function isEven(num){
    if(num%2 === 0) return true;
    return false
}
let out = isEven(5);
console.log(out)

//Q5: Write a function greetUser(name = "Guest") that uses a default parameter. Call it once with a name, and once without any argument.
function greetUser(name = "Guest"){
    console.log("Hi",name);
}
greetUser();

function greetUser2(name = "Guest"){
    console.log("Hi",name);
}
greetUser2("Daud");



//Q6: Guess the output:
function multiply(a, b) {
    return a * b;
}
let result = multiply(4, 5, 10);
console.log(result);//20


//Q7:Write an arrow function subtract that takes two numbers and returns their difference. Call it and print the result.
let sub = (a,b)=>{
     return a-b
}

let answer = sub(10,5);
console.log(answer);


//Q8: Guess the output:
// function test() {
//     console.log(x);
//     let x = 5;
// }
// test();//Cannot access 'x' before initialization


//Q9: Write a function checkPassword(pass) that:

// Returns "Too short" if password length is less than 6
// Returns "Valid" otherwise

function checkPassword(pass){
    if(pass.length < 6) return "Too Short";
    return "Valid"
}
 let output = checkPassword("Ddak");
 console.log(output);


 //Q10:Write a function calculator(num1, num2, operator) that takes two numbers and an operator ("+", "-", "*", "/"), and returns the correct result using if-else if. Take all three values from the user using prompt(), then show the result using alert().

let num1 = +prompt("Enter ist number");
let num2 = +prompt("Enter 2nd number");
let op = prompt("Enter the operation +,-,*,/")
 function calculator(num1,num2,_operator){
    if(op === "+") return num1 + num2;
    if(op === "-")return num1 - num2;
    if(op === "*")return num1 * num2;
    if(op === "/")return num1 / num2;

 }

let answer1 =  calculator(num1,num2,op);
alert(answer1);

