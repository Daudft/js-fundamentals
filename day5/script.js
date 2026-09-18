//loops



// for(let i = 0; i<101; i++){
//     console.log(i);
// }


//while
// start
// while(end){
//     code
//     chnage
// }

// let i = 0;
// while(i < 32){
//     console.log(i);
//     i++;
// }

//do
//start
//do{
// code
// i++;
//}
//while(end)


// let j = 1;
// do{
//     console.log(j);
//     j++;
// }while(j<10)


//Q1: Print numbers from 1 to 10 using for loop
for(let i = 1; i < 11; i++){
    console.log(i)
}

//Q2: Print numbers from 10 to 1 using a while loop
let num = 10;
while(num > 0){
    console.log(num);
    num--;
}

//Q3:Print even number from 1 to 20 using for loop
for(let i = 0; i < 21; i++){
    if(i%2 === 0){
        console.log("even",i);
    }
}

//Q4: Print odd number from 1 to 15 uisng a while loop

let i =1;
while(i < 16){
    if(i%2 !== 0){
        console.log("Odd",i);
    }
    i++
}

//Q5:Print the mul table of 5
let n = 5
for(let i =1; i <11; i++){
    
    console.log(`5 * ${i} =`,n * i);
}

//Q6:Find the sum of numbers from 1 to 100 using a for loop
let sum = 0;
for(let i = 1; i <101; i++){
    
    sum +=i;
}
console.log(sum);

//Q7: Print all numbers between 1 to 50 that are divisible by 3
for(let i = 1; i<=50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}

//Q8:Ask the user for a number and print whether each number from 1 to that number is even or odd
let number = +prompt("Enter a number");
for(let i = 1; i<=number; i++){
    if(i%2 === 0){
        console.log(`${i} is even`)
    }else{
        console.log(`${i} is odd`)
    }
}

//Q9: Count how many numbers between 1 to 100 are divisible by both 3 and 5

let count = 0;

for(let i =1; i<=100; i++){
    if(i%3 === 0 && i%5 === 0){
        count++;
        console.log(i)
    }
}
console.log("ToTal :",count);




