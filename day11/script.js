
//Selection
let h1 = document.querySelector("h1");
h1.textContent = "Hy From Js"
// console.dir(h1);

let cls = document.querySelector("h2");
cls.innerText = "Hello  2";


//attribute

let img = document.querySelector("img");
// console.dir(img)
// img.src = "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg" one way

img.setAttribute("src","https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg")

// img.removeAttribute("src");


//create elem and append
let li = document.createElement("li");
li.textContent = "Mai Akri fruit hu"
console.dir(li);
document.querySelector("ul").appendChild(li);


// Q1: Create an array of 5 fruit names. Use a for loop to create an <li> for each fruit and append it to a <ol> in the DOM.

let fruits = ["Apple","Mango","Banana","Orange","Watermelon"]

for(let i = 0; i<fruits.length; i++){
    let lis = document.createElement("li");
    lis.textContent = fruits[i];
    document.querySelector("ol").appendChild(lis);
}


//Q2: Write a function changeHeading(text) that takes a string and sets it as the textContent of an h1 element. Call it with different texts.

function changeHeading(text){
    h1.textContent = text;
}
changeHeading("Hello G From funtions");//h1 on the top of code

// Q3: Create an array of 3 image URLs. Use forEach() to loop through them, and each time change the src attribute of an <img> element (use setTimeout or just log which one is being set, whichever you're comfortable with).


let imgs = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqh_TfZG1xmi_6gd_rvNzVZMFWQcw0LxXNxueM7O3OgePq-eOxpcZSmyK&s=10","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ixy1bShuIT5isVz02quWJxQVitcVG625V6WNBFV9hNXPXBJaJpGaalw&s=10","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8eTls4Lw4tA3HdaaY3TkULj44PQ7QjfFYkxeAisvIitgz9oTT-oees&s=10"]


imgs.forEach(function(val){
    img.setAttribute("src",val)
})

// imgs.forEach(function(val, index){
//     setTimeout(() => {
//         img.setAttribute("src", val);
//     }, index * 1000); // 0s, 1s, 2s delay between each
// });
