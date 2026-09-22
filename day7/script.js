//funtions

function abc(){
    console.log("Hello");
}
abc();


// Q1:Guess output

hello();
function hello(){
    console.log("Hello g");
}//Hello g


//Q2:Convert this function into arrow function
//funtction mul(a,b){
//return a* b
//}

let fun = (a,b)=>{
    return a*b;
}

//Q3:Identify parameters,and arguments in this funtion
function welcome(name){//this name is parameter
    console.log(name);
}
welcome("daud");//this val is argument


//Q4:Guess output
function sayHi(name = "Guest"){
    console.log("Hi",name);
}
sayHi();//Hi Guest //default value


//Q5:use rest 
function ab(a,b,...val){
    console.log(a,b,val)
}
ab(1,2,3,4,5,6);

//Q6: Retun value of this function
function f(){
    return;
}
console.log(f());//undefined

//Q7: Pass a function into another function and execute it

function ui(val){
    val();

}
ui(function(){
    console.log("second funtion");
})

//Q8: pure or impure function
let total = 1;
function tot(num){
    return total = total + num
}
console.log(tot(3));//impure

//Q9:Closure

function ist(){
    let a = 10;
    return function(){
        console.log("value of parent funtion",a);

    }
}
let value = ist();
console.log(value);//function
value();//inner function
