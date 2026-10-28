//promise

let a = 6;
let prm = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(a === 5){
         resolve();
        }else{
            reject()
        }
     
    },2000)
})

prm
.then(()=>{
    console.log("Hello")
})
.catch(()=>{
    console.log("Catch hu ")
})


//fetch

fetch("https://randomuser.me/api/")
.then((raw)=> raw.json())
.then((realData)=> console.log(realData.results[0].name.first))



async function abc(){
    let raw = await fetch("https://randomuser.me/api/")
    let realDatas = await raw.json();
    console.log(realDatas.results[0].name.first)

}
abc();



//Error Handling

//Syntax Error , Runtime Error