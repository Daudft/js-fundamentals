// Q1: Create three variables using var, let, and const. Try reassigning each and note what happens.
var name = "ali";
name = "ali"
console.log(name);

let age = 34;
age = 23;
console.log(age);

// const tp = "hello";
// tp = "hello 2";
// console.log(tp);

//Q2: Guess the output: 
let x = 5;
 x = "5"; 
 console.log(typeof x); //string

 //Q3: Check typeof for: null, undefined, NaN, [1,2,3], {}, function(){}
 console.log(typeof null);//object
 console.log(typeof undefined);//undefined
 console.log(typeof NaN);//number
 console.log(typeof [1,2,3]);//object
 console.log(typeof {})//object
 console.log(typeof function(){})//function

 //Q4: Guess the output: 
 console.log(1 + "1"); //11
 console.log("10" - "5"); //5
 console.log("5" * "2");//10

 //Q5:Guess the output: 
 console.log(0 == false); //true
 console.log(0 === false); //false
 console.log("" == false);//true


 //Q6: Create a BigInt value and check its typeof.

 let halo  = 39523572935283598359n;
 console.log(typeof BigInt)

 //Q7: Guess the output:
 let a = 10;
{
  let a = 20;
  console.log(a);//20
}
console.log(a);//10

//Q8: Write code showing dynamic typing — same variable holding a number, then a string, then a boolean, with typeof checked each time.

let num = 3;
console.log(num,typeof num);
num = "hlo";
console.log(num,typeof num);
num = true;
console.log(num,typeof num);



//Q9 : Guess the output:
 let b = 5; console.log(b++ + b++);//5 + 6 = 11

//Q10: Guess the output: 
let aa = 5; console.log(++aa + ++aa); //6 + 7 = 13

//Q11: Write a ternary expression to check if a number is positive or negative.
let num1 = 6;
let num11 = num1 >= 0 ? console.log("postive") : console.log("negative");

//Q12: Guess the output: 
console.log(true && "hello"); //Hello
console.log(false || "world");//world
 console.log(null ?? "default");//default

 //Q13: Guess the output: 
 console.log(2 ** 3 ** 2); //512

 //Q14: Guess the output: 
 console.log(10 % 3); //1
 console.log(-10 % 3);//-1

 //Q15: Guess the output:
  console.log(!!"" ); //false
  console.log(!!0); //false
  console.log(!!"0");//true


  //Q16: Write a program to check if a number is a multiple of both 3 and 5.

  let num12 = 15;
  if(num12 % 3===0 && num12%5 === 0){
    console.log("number is mutli of 3 and 5")
  }else{
    console.log("not multi of 3 and 5");
  }


  //Q17 : Write a switch statement that prints the day name for numbers 1-7.
  let day = 3;
  switch(day){
    case 0:
        console.log("Today is sunday");
        break;
    
    case 1:
        console.log("Today is saturday");
        break;

    case 2:
        console.log("TOday is monday");
        break;
        default:
            console.log("noday")

  }

  //Q18: Take a user's marks via prompt() and print grade (A/B/C/F) using if-else if.

  let marks = +prompt("Enter marks");
  if (marks >=90  && marks <= 100) console.log("A+");
  else if(marks >=80 && marks<=89)console.log("A");
  else if(marks >=70 && marks <=79)console.log("B");
  else if(marks >=50 && marks <=69)console.log("C");
  else{console.log("Fail")}

  //Q19: Guess the output:
  let xi = "10";
if (xi) console.log("truthy");
else console.log("falsy");


// 20:Write a program to check if a year is a leap year.
let year = 2016
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log("leap year")
}else{
    console.log("not a leap year")
}


