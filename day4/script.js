//IF IF ELSE ,SWITCH 

//Write a function getGrade(score) that:
// Takes a Student's marks (0 to 100)
// Return the grade based on this logic:
// 90 - 100 A+
// 80 - 89 A
// 70 - 79 B
// 60 - 69 C
// 33 - 59 D
// 0 - 32 Fail
// Anything else   Invalid marks 


let marks = 12;
function getGrade(val){

    if(marks >=90 && marks <=100) return "A+"
    if(marks >=80 && marks <=89) return "A"
    if(marks >= 70 && marks <=79) return "B"
    if(marks >=60 && marks <=69) return "C"
    if(marks >=33 && marks <=59) return "D"
    return "fail"

}
console.log(getGrade(marks))


// Practice Questions (Variables, Datatypes, Operators, If/Else)

// Q1 Create a variable age using let. Write an if-else to check if age is 18 or above, print "Adult" or "Minor" using alert().

let age = 18
if(age >= 18){
alert("Adult");
}else{
    alert("Minor")
}


// Q2 Guess the output:
let x = 10;
x = "hello";
console.log(typeof x);//string

// Q3 Create a const variable country and try to reassign it. What happens?

const country = "Pakistan";
// country = "India"
console.log(country);


// Q4 Guess the output:
console.log(5 + "5");//55
console.log("5" - 2);//3
console.log(5 * "2");//10


// Q5 Take a number from user using prompt(). Use if-else to check if it's even or odd, and print result using alert().
let num = +prompt("Enter a number");

if(num%2 === 0){
    console.log("even");
}else{
    console.log("odd")
}

// Q6 Guess the output:
console.log(10 == "10");//true
console.log(10 === "10");//false
console.log(null == undefined);//true
console.log(null === undefined);//false

// Q6 Take a number from user using prompt(). Use if-else if-else to check if it's positive, negative, or zero, and print result using alert().

let number = +prompt("Enter any num");
if (number === 0){
    console.log("zero");
}
else if(number > 0){
    console.log("positive")
}else{
    console.log("Negative")
}


//Q7 Guess the output:
let a = 5;
console.log(a++ + ++a);//5 + 7 =12

//Q8Write code that:

// Takes two numbers from the user using prompt()
// Converts them properly using Number()
// Uses if-else if-else to check which number is bigger, smaller, or if they are equal
// Prints the result using alert()

let num1 = Number(prompt("Enter num1"));
let num2 =Number(prompt("Enter num2"));

if(num1 === num2){
    console.log("Equal");
}else if(num1 > num2){
    console.log("Num1 is bigger");
}else{
    console.log("Num2 is bigger")
}



