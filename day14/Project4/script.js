let main = document.querySelector("main");
let img = document.querySelector("img");

main.addEventListener("mousemove",function(dets){
    img.style.left = dets.x + "px"
    img.style.top = dets.y + "px"
    
})