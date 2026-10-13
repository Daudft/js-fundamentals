let btn = document.querySelector("button");
let flag = false;


btn.addEventListener("click",function(){
    if(flag === false){
        btn.textContent = "Friends";
        btn.style.backgroundColor = "green";
        flag = true;
    }else{
        btn.textContent = "Add Friend";
        btn.style.backgroundColor = "";
        flag = false
    }
})