// SECTION 1: OOPS Thinking with Objects 
// 1. Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.  
// 2. Add one more method to the same object that increases the price by 10 percent. 
// 3. Now imagine you need 10 laptops with same structure but different data. Write down (in words or code) what problems you will face if you keep using plain objects.

let laptop = {
    brand: "HP",
    price: "1000",
    print: function(){
        console.log("Laptop Started");
    },
    incPrice:function(){
        console.log(this.price - 100 )
    }
}
laptop.print();
laptop.incPrice();
//we need to make 10 different objs 
//solution
//so we can create a laptop class



// SECTION 2: Classes and Objects (Reinforcement) 
// 4. Create a class named Employee that stores: name salary
// Add a method showDetails that prints name and salary. 
// 5. Create three employee objects from the same class and verify that modifying one employee does not affect the others. 
// 6. Explain in your own words: Why is class considered a better option than writing similar objects again and again?

class Employee{
    constructor(name,salary){
        this.name = name,
        this.salary = salary
    }
    showDetail(){
        console.log(this.name + "--" + this.salary);
    }
}
let emp1 = new Employee("ali",300);
let emp2 = new Employee("khan",444);
let emp3 = new Employee("zuu",550); 
emp1.showDetail();
//one emp dos affect others
//to write better code //if emp are more than 100 so repeating same object sep is difficult




// SECTION 3: Constructor and Initialization 
// 7. Create a class named BankAccount. Its constructor should accept accountHolderName and balance. 
// 8. Inside the constructor, store both values using this. 
// 9. Add a method deposit(amount) that increases the balance. 10. Create two bank accounts and deposit money into only one. Observe and explain why the second account is not affected.


class BankAccount{
    constructor(accHolderName,balance){
        this.accHolderName = accHolderName,
        this.balance = balance
        }
        deposit(amount){
            console.log(`Current Balance: ${this.balance} new Balance: ${this.balance + amount}`);
        }


    }
    

let acc1 = new BankAccount("ali",2000);
let acc2 = new BankAccount("khan",3000);
acc1.deposit(500);
acc2.deposit(500)





// SECTION 4: Understanding this (Very Important) 
// 11. Create an object named profile with a property username and a method printName that logs this.username. 
// 12. Call the method normally and observe the output. 
// 13. Store the method in a separate variable and call it. Observe what happens to this and explain why. 14. Modify the code so that this works correctly again.

let profile = {
    userName:"ali",
    print:function(){
        console.log(this.userName);
    }
}
profile.print();//print the name in profile

let printf = profile.print;
printf()//undefined

let fix = profile.print.bind(profile);
fix();




// SECTION 5: Constructor Function and Prototype 
// 15. Create a constructor function called Vehicle that accepts type and wheels. 
// 16. Add a method describe inside the constructor and observe memory behavior when multiple objects are created. 
// 17. Move the same method to Vehicle.prototype and repeat the test. 18. Explain why the prototype approach is preferred.


function Vehicle(type,wheels){
    this.type = type,
    this.wheels = wheels
    // this.speed = function(){
    //     console.log("Hlo speed");/// (1)
    // }

}

Vehicle.prototype.speed = function(){//(2)
    console.log("hlo Speed")
}

let veh1 = new Vehicle("Honda","4 Wheels");
let veh2 = new Vehicle("Honda","4 Wheels");
console.log(veh1);
console.log(veh2);
console.log(veh1.speed === veh2.speed)// (1) both have sep methods(their own)//false (2) now both have a shared method //true

