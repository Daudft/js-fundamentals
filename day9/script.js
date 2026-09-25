//Q1: Create an object for a student with name, age and isEnrolled.
let student = {
    name: "ali",
    age: 24,
    isEnrolled: true
}

console.log(student.name);
console.log(student.isEnrolled);
console.log(student["age"]);


//Q2: Object with non-string keys (boolean and number keys)
let obj = {
    true: "this",
    43: "ali"
}
console.log(obj.true);
console.log(obj["43"]);


//Q3: Accessing object property using a variable as a dynamic key
let name = "first-name";
let ob = {
    "first-name" : "ali",
}
console.log(ob[name]);


//Q4: Nested objects (object inside an object)
let locations = {
    city: "lahore",
    coordinates:{
        lat: 23.5,
        lung: 45.4
    }
}
console.log(locations.coordinates.lat)


//Q5: Object destructuring
let {lat,lung} = locations.coordinates;
console.log(lat);
console.log(lung);


//Q6: Loop through an object using for...in
const course = {
    title: "JS",
    duration: "4hours"
}
for(let keys in course){
    console.log(keys);
    console.log(keys,course[keys]);
}