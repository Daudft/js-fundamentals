let allBtn = document.querySelectorAll("button");
allBtn.forEach(function(elem){
    elem.addEventListener("click",function(){
       if(elem.textContent == "Add Friend"){
        elem.textContent = "Remove Friend"
       }else{
        elem.textContent = "Add Friend"
       }
    })
})