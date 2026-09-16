//operators
//Arithmetic, Comparison , Logical , Assignment , Unary Operator
// + - * /  % **
// = == ===
//< > <= >= ! != !== 
// && ||  ?:
//X++ ++x


// Q1: Create two numbers  a = 10 and b = 3

let a = 10;
let b = 3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Q2: Write let x = 5 and x = x + 3
//now rewrite the same using += Do the same for -= ,*= and /=,

let num = 5;
num = num + 3;
console.log(num);

//now using +=
let num1 = 5;
num1 += 3;
console.log(num1)

let num2 = 5;
num2 -= 3;
console.log(num2);

let num3 = 5;
num3 *= 3;
console.log(num3);


// Q3: Let Count = 5;
//Use count++ and log Value before and after;
//Repeat for count--

let count = 5
console.log(count)
count++;
console.log(count);


let count1 = 5;
console.log(count1);
count1--;
console.log(count1);

//Q4: Compare two values 5 == "5" and 5 === "5" and observe difference
let x = "5";
let y = 5;

console.log(x==y);//not checking type of value 
console.log(x===y);//checking type too


//Q5: Check if 10 is less than 5 and greater than 20 or equal to 15
let c = 10;
 if(c < 5 || b<=20)
    console.log("true")
else{
    console.log("false")
}



