// SECTION 1: Objects and OOPS Thinking (Foundation) 
// 1. Create a user object that stores name and email and has a login method which prints “User logged in”. 
// 2. Imagine you now have 5 users. First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches. 
// 3. Create a product object that stores name and price and has a method which returns the final price after discount.
// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.


let user = {
    name: "Ali",
    email: "h@h.h",
    loggedIn: function(){
        console.log("LoggedIn");
    }
}
let user2 = {
    name: "Ali",
    email: "h@h.h",
    loggedIn: function(){
        console.log("LoggedIn");
    }

}
let user3 = {
    name: "Ali",
    email: "h@h.h",
    loggedIn: function(){
        console.log("LoggedIn");
    }

}
let user4 = {
    name: "Ali",
    email: "h@h.h",
    loggedIn: function(){
        console.log("LoggedIn");
    }

}
let user5 = {
    name: "Ali",
    email: "h@h.h",
    loggedIn: function(){
        console.log("LoggedIn");
    }

}

//Now Sec Approach

class User{
    constructor(name,email){
        this.name = name,
        this.email = email
    }

    loggedIn(){
        console.log("LoggedIn");
    }
}

let user11 = new User("ali","khan");
let user22 = new User("ali","askldl");
let user33 = new User("asdakj","asdkj");
let user44 = new User("sjdhk","asdn");
let user55 = new User("sjkdhk","kcnk");



let product = {
    name:"pc",
    price: 1000,
    discount:function(){
      return  this.price - 200
    }
}
console.log(`Original Price is : ${product.price} and after discount: ${product.discount()}`)



// SECTION 2: Classes and Objects 
// 4. Create a Car class with the following: brand speed a drive method that prints the car brand and speed 
// 5. Create two different car objects from the same class and verify that their data is different. 
// 6. Answer this in your own words: If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?//without class we need to create multiple objs

class Car{
    constructor(brand,speed){
        this.brand = brand,
        this.speed = speed
    }
    drive(){
        console.log(this.brand  + "  --  " +  this.speed);
    }
}
let car1 = new Car("BMW","120KM/H");
let car2 = new Car("Honda","100KM/H")
car1.drive();
car2.drive()




// SECTION 3: Constructor and this keyword 
// 7. Create a Student class whose constructor accepts name and roll number. Add a method introduce that prints both values. 
// 8. Inside the constructor, set values using this. Then try removing this and notice what error occurs and why.
//  9. Create an object with two methods: One method using a normal function One method using an arrow function

// Inside both, print this and observe the difference.

// The goal is to clearly understand how this works and when it changes.



class Student{
    constructor(name,rollNumber){
        this.name = name,
        this.rollNumber = rollNumber
    }
    introduce(){
        console.log(this.name + "  "+ this.rollNumber)
    }
}
let student1 = new Student("khan",345);
student1.introduce();


// class Student1{
//     constructor(name,rollNumber){
//         name = name,
//         rollNumber = rollNumber
//     }
//     introduce(){
//         console.log(this.name + "  "+ this.rollNumber)
//     }
// }
// let student2 = new Student1("khan",345);
// student1.introduce();



let obj = {
    fun:function(){
        console.log(this);//object
    },
    func:()=>{
        console.log(this)//window

    }
}
obj.fun();
obj.func(); 




// SECTION 4: Constructor Functions and Prototypes 
// 10. Create a User constructor function (do not use class syntax). 
// 11. Add a login method in two ways: First, inside the constructor Then, move the method to the prototype 
// 12. Create two User objects and compare their login methods using equality. Explain why the result is true or false.

// The purpose here is to understand how prototypes help share behavior efficiently.

function abc(){
    this.name = "ali"
    this.loggedIn = function(){
        console.log("loggedIn");
    }
}
 let x = new abc()
 console.log(x.name);
 x.loggedIn();


//prototype
 function abcd(){
    this.name = "ali"
    
}

abcd.prototype.loggedIn = function(){
        console.log("loggedIn");
    }
 let y = new abcd()
 let z = new abcd()
 console.log(y);
 y.loggedIn();




 let user111 = {
    loggedIn: function(){
        console.log("hlo")
    }
 }
 let user222 = {
    loggedIn: function(){
        console.log("Hlo2")
    }
 }

 console.log(user111.loggedIn === user222.loggedIn)//false
 console.log(y.loggedIn === z.loggedIn)//true because shared due to prototype//184



//  SECTION 5: call, apply, bind 13. Create a function that prints this.name. 14. Create an object that contains a name property.

// Use call to run the function using the object Use apply to run the function using the object Use bind to create a new function and then call it 15. Borrow a method from one object and run it for another object using call.

// The goal is to understand how this can be manually controlled.


let obj1 = {
    name: "kaska"
}
function hlo(){
    console.log(this.name);
}
hlo.call(obj1)
hlo.apply(obj1)
let bounded = hlo.bind(obj1);
bounded();

let obj3 = {
    message: function(){
        console.log("Ok boss")
    }
    
}
let obj2 = {
    method:function(){
        this.message()
    }
}


obj2.method.call(obj3)