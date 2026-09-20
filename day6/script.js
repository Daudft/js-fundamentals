// Practice Questions

//Q1: Ask user's age and check if eligible to vote or not

// let age = prompt("Enter your age");

// if(age === null){
//     console.log("You Cancelled it why Write your age");
// }else{
//     if(age.trim() === ""){
//         console.log("Write something");
//     }else{
//         age = Number(age);
//         if(isNaN(age)){
//             console.log("Write age,not your name or anything else")
//         }else{
//             if(age <= 0)console.log("Enter Proper age,dont do this ");
//             else if(age >= 18) console.log("You can vote");
//             else console.log("You can not vote")
//         }
//     }
// }

// Short 
let input = prompt("Enter your age");
let age = Number(input);

if (input === null || input.trim() === "") {
    console.log("Write something / You cancelled it");
} else if (isNaN(age)) {
    console.log("Write age, not your name or anything else");
} else if (age <= 0) {
    console.log("Enter proper age, don't do this");
} else if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}


//Q 2: Print Table of 5

for(let i = 0; i<=10; i++){
    console.log(`5 * ${i} : ${5*i}`)
}

// //Q3: Count how many numbers between 1 and 15 are greater than 8

let count = 0;
for(let i = 1; i<=15; i++){
    if(i > 8 ){
        count++
    }
}
console.log(count)

//Q4 Ask user for passwrod and print access status.
//Hardcoded passwrod .Compare with user input.

let password = "daud";
let userPassword = prompt("Enter password");

if(userPassword === null || userPassword.trim() === "" || !isNaN(userPassword)){
     console.log("You cancelled it /enter some thing/ you entered a number")
}else{
    if(userPassword === password){
        console.log("LoggedIn")
    }else{
        console.log("You entered wrong password")
    }
}

//Q5:Allow only 3 attempts to enter correct password .
//If user gets it right early ,stop if not account locked.

let pass = "daud";
let attempt = 0;
let flag = false;

let userpass = prompt("Enter a password");
    attempt++;
if(userpass === pass){  
flag = true
}


while(userpass !== pass){
    if(attempt === 3){
        console.log("Account locked")
        break;
    }

    userpass = prompt("Enter password again");
    attempt++;
    if(userpass === pass)
         {
            flag=true;
        }
}
if(flag === true){
    console.log("LoggedIn")
}

//Q6: ASk user for word util they type "Stop"

let word = prompt("enter any word");
let count1 = 0;


while(word !== "stop"){
    if(word === "yes"){
         count1++
    } 
    word = prompt("enter any word");
}
console.log(`Total yes Count : ${count1}`)

//Q7 :Print numbers divisible by 7 from 1 to 50

for(let i = 1; i<51; i++){
    if(i%7 === 0){
        console.log(`Number divisible by 7 :${i}`)
    }
}

//Q8: Sum of all numbers from 1 to 30
//print 
let sum1 = 0;
for(let i = 1; i<=30; i++){
    if(i%2 !== 0){
        sum1 += i;
    }
}
console.log(`sum of odd numbers from 1 to 30 is :${sum1}`)


// Q9: Keep asking number until user enter even number 
let numb = +prompt("Enter a number");

while(numb%2 !== 0){
    numb = +prompt("Enter a number");
   
}

//Q10: print numbers between two user inputs
let start = +prompt("enter ist number");
let end = +prompt("enter second number");

for(let i = start; i<=end; i++){
    console.log(i)
}

// Q11: Print only ist 3 odd numbers from 1 to 20
let count2 = 0;
for(let i = 1; i<=20; i++){
    if(count2 === 3)break;
    if(i%2 !== 0){
        console.log(i);
        count2++
    }
} 

//Q12: Ask user 5 numbers count how many are even/positive
let postiveCount = 0;
let evenCount = 0
for(let i =1; i<=5; i++){
    let number1 = prompt("Enter five numbers");


    if(number1 > 0){
        postiveCount++
    }

    if(number1%2 === 0){
        evenCount++
    }
}
console.log(`Total postive numbers are : ${postiveCount}`)
console.log(`Total even numbers are : ${evenCount}`)