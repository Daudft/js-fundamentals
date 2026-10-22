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
// 6. Answer this in your own words: If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

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