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
// let input = prompt("Enter your age");
// let age = Number(input);

// if (input === null || input.trim() === "") {
//     console.log("Write something / You cancelled it");
// } else if (isNaN(age)) {
//     console.log("Write age, not your name or anything else");
// } else if (age <= 0) {
//     console.log("Enter proper age, don't do this");
// } else if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You cannot vote");
// }


//Q 2: Print Table of 5

// for(let i = 0; i<=10; i++){
//     console.log(`5 * ${i} : ${5*i}`)
// }

// //Q3: Count how many numbers between 1 and 15 are greater than 8

// let count = 0;
// for(let i = 1; i<=15; i++){
//     if(i > 8 ){
//         count++
//     }
// }
// console.log(count)

//Q4 Ask user for passwrod and print access status.
//Hardcoded passwrod .Compare with user input.

// let password = "daud";
// let userPassword = prompt("Enter password");

// if(userPassword === null || userPassword.trim() === "" || !isNaN(userPassword)){
//      console.log("You cancelled it /enter some thing/ you entered a number")
// }else{
//     if(userPassword === password){
//         console.log("LoggedIn")
//     }else{
//         console.log("You entered wrong password")
//     }
// }

//Q5:Allow only 3 attempts to enter correct password .
//If user gets it right early ,stop if not account locked.

let pass = "daud";
let attempt = 0;
let flag = false;

let userPass = prompt("enter password");
attempt++;
if(userPass === pass) flag=true;

while(userPass !== pass){
    if(attempt === 3){
        console.log("account locked")
        break;
    }

    userPass = prompt("enter password");
    attempt++;
    if(userPass === pass) flag= true;

}

if(flag === true){
    console.log("loggedIn")
}