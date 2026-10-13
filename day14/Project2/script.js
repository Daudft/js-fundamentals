let img = document.querySelector("img")
let i = document.querySelector("i");

img.addEventListener("dblclick",function(){
    i.style.opacity = 1
    setTimeout(function(){
        i.style.opacity = 0
    },1000)
    
})