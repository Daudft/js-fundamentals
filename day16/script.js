class Person{
    constructor(){
        this.name = "Khan",
        this.age = 23,
        this.email = "khan@gmail.com"
    }


    hello(){
        console.log("my name is khan Hello")
    }
}

let person1 = new Person()
console.log(person1)
person1.hello()

class Dog{
    constructor(name,type,age){
        this.name = name
        this.type = type
        this.age = age
    }
}
let dog1 = new Dog("Doge 1","Dogesh Family",4)
let dog2 = new Dog("Doge 2","Dogesh Family",6)
console.log(dog1);
console.log(dog2);


///Prototype
class Cars{
    constructor(name,model,price){
        this.name = name,
        this.model = model,
        this.price = price
    }
    speed(){
        console.log("Max Speed 300km/h");
    }

    
}

Cars.prototype.wheels = function(){
        console.log("4 Wheels");
    }

let car1 = new Cars("Honda","2027","4M $");
console.log(car1);
let car2 = new Cars("BMW","2026","8M $");
console.log(car2);
let car3 = new Cars("Hello","2012","45M $");
console.log(car3);
car3.wheels()
car2.wheels()


//this keyword
// Global --> window
console.log(this);

//Inside Function --> window
function abc(){
    console.log(this);
}
abc();



//Function inside object --> Object
let obj1 = {
    name:"ali",
    func : function(){
        console.log(this);
        console.log(this.name)
    }
}
obj1.func()




//Es6 function inside  obj
let obj3 = {
    func2: ()=>{
        console.log(this);
    }
}
obj3.func2()



//Es5 function inside es5 function inside obj --> window
let obj2 = {
    func1: function(){
        function abc(){
            console.log(this);
        }
        abc()
    }
}
obj2.func1();



//es6 function inside es5 function inside object -->obj


let ob ={
    func5: function(){
        (()=>{
            console.log(this);
        })();
    }
}

ob.func5()




//Call apply and bind
let obj8 = {
    age: 56
}

    function ab(){
        console.log(this);
    }

    ab.call(obj8);          // runs now, this = obj8
ab.apply(obj8);         // runs now, this = obj8 (args passed as an array) ab.apply(obj8,[1,2,3])
let bound = ab.bind(obj8); // returns a new function, doesn't run yet
bound();  









