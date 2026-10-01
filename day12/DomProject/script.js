let teams = [
    {
        team: "Hyderabad Kingsmen",
        primary:"blue",
        secondary:"green"
    },
    {
        team: "Islamabad United",
        primary:"red",
        secondary:"orange"
    },
    {
        team: "Karachi Kings",
        primary:"lightblue",
        secondary:"crimson"
    },
    {
        team: "Lahore Qalandars",
        primary:"blue",
        secondary:"red"
    },
    {
        team: "Multan Sultans",
        primary:"orange",
        secondary:"green"
    },
    {
        team: "Quetta Gladiators",
        primary:"green",
        secondary:"pink"
    },

]

let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click",function(){
   let a = Math.floor(Math.random()*teams.length);
   h1.textContent = teams[a].team;
   h1.style.backgroundColor = teams[a].primary;
   main.style.backgroundColor = teams[a].secondary;
})
