//addEventListener
let h1 = document.querySelector("h1");
let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let a = 0;

inc.addEventListener("click",function(){
   a++;
   h1.textContent = a;
})
dec.addEventListener("click",function(){
    a--;
    h1.textContent = a;
})



//input 
let inp = document.querySelector("input");

inp.addEventListener("input",function(dets){
    if(dets.data !== null){
        console.log(dets.data)
    }
    
})

//change
let sel = document.querySelector("select");
let h3 = document.querySelector("h3");
sel.addEventListener("change",function(dets){
    h3.textContent = `${dets.target.value} Device Selected`

    

})

//Math.random() etc

// let b = Math.floor(Math.random()*10)
// console.log(b);

let box = document.querySelector(".box");
let boxbtn = document.querySelector(".boxbtn");


boxbtn.addEventListener("click",function(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`

    console.log(c1,c2,c3);
})