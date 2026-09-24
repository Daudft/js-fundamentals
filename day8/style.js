//Arrays
//Create, Access, Modify Arrays
let arr = [1,2,3,4,5];
console.log(arr[3]);//4
console.log(arr[0])//1

arr[3] = "mango";
console.log(arr);//updated on index 3=>mango


// methods
//push => add items at the end of array
arr.push("apple");
console.log(arr);

//pop => remove items from the end of array
arr.pop();//apple removed 
console.log(arr);

//shift => Remove items from the start
arr.shift();//1 removed
console.log(arr);

//unshift => Add items at the start
arr.unshift("Hello");
console.log(arr);


//Few more methods
//splice()
//slice()


//splice 
let arr1 = [10,20,30,40,50]
arr1.splice(1,1)//from index 1 remove next 1//here 20 removed;
console.log(arr1);
arr1.splice(0,3);//from index 0 remove next//10 30 40 removed;
console.log(arr1);

//now we can also add using splice .
//50 left in arr1

arr1.splice(0,0,10,20,30,40);//just add the index and use 0 0 means remove nothing 
console.log(arr1);
arr1.splice(2,0,"apple");
console.log(arr1);//apple added before 30

//slice() — returns a copy of part of array (doesn't change original)
let arr2 = [1,2,3,4,5,6,7,8];
console.log(arr2);
let sl = arr2.slice(1,4);//[2,3,4];
console.log(sl);
console.log(arr2);


let arr3 = ["apple","ali","khan"];
console.log(arr3);
arr3.splice(1,0,"mango");
console.log(arr3)

arr3.splice(2,1)//ali removed
console.log(arr3);//apple mango khan

let arr4 = arr3.slice(0,1);//apple
console.log(arr3);
console.log(arr4);


//Reverse
let arr5 = [1,2,3,4,5];
arr5.reverse();
console.log(arr5);
let arr6 = ["Mango","apple","banana"];
arr6.reverse();
console.log(arr6);
arr6.reverse();
console.log(arr6);


//sort
let arr7 = [3,2,5,1,6]
arr7.sort();
console.log(arr7)
let arr8 = [10,49,2,9]
arr8.sort((a,b)=>{
    return a+b //for descending order //a-b for ascending 
})
console.log(arr8);


//map() — creates a new array by transforming each item
let arr9 = [1,2,3,4,5];
let arr10 = arr9.map((val)=>{
    return val*2
})
console.log(arr10);

//filter creates a new array with items that pass a condition
let nums = [2,4,5,6,7];
let evens = nums.filter((val)=> {
   if(val%2 === 0)
    return val
    } )
    console.log(evens);

//reduce() — reduces array to a single value

let arr11 = [1,2,3,4,5,6]
let arr22 = arr11.reduce((acc,next)=>{
    return acc + next

},10)
console.log(arr22);

//find() returns the first item that matches a condition
let arr33 = [1,2,3,4,5,6]
let found = arr33.find((n)=> n>2);
console.log(found);
