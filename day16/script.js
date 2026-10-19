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
console.log(dog1)
console.log(dog2)


