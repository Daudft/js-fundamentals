// Project 1
let btn = document.querySelector("button");
let box = document.querySelector(".box");


let arr = [
    "Dream big, start small.",
    "Stay hungry, stay foolish.",
    "Less talk, more action.",
    "Keep going, never quit.",
    "Believe in yourself.",
    "Progress over perfection.",
    "Make today count.",
    "Do it with passion.",
    "Small steps every day.",
    "Be kind, work hard."
];


btn.addEventListener("click",function(){
    let h1 = document.createElement("h1");
    h1.textContent = arr[Math.floor(Math.random()*arr.length)]
    
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);


    let x = Math.random()*100;
    let y = Math.random()*100;
    let z = Math.random()*360;

    let f = 15 + Math.floor(Math.random()*20);
    console.log(f);
    
    h1.style.fontSize = f+"px";
    h1.style.color = `rgb(${a},${b},${c})`
    h1.style.left = x+"%";
    h1.style.top = y+"%";
    box.appendChild(h1);
})


// Project 2

let downloadBtn = document.querySelector(".download");
let movLine = document.querySelector(".movLine");
let h2 = document.querySelector("h2");
let a = 0;

downloadBtn.addEventListener("click",function(){
    console.log("helo")
    

  let id =  setInterval(function(){
    downloadBtn.disabled = true
        a++;
        movLine.style.width = a+"%";
        h2.textContent = a+"%"

        
        if(a === 100){
             downloadBtn.textContent = "Downloaded"
             
          clearInterval(id);
        }

    },40)
   
   
})


