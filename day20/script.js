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

// lest b = 6;
// Uncaught SyntaxError: Unexpected identifier 'b' (at script.js:46:6)

//Runtime
let obj = {
    a:3
}
// console.log(a.name);//undefined
// console.log(a.name.age);//script.js:54 Uncaught TypeError: Cannot read properties of undefined (reading 'age')
    // at script.js:54:20+

    // try and catch

    try{
        let a = 5;
        let b = a.name.jlo
    }catch(err){
        console.log(err)//code working 
        console.log(err.name);//TypeError
        console.log(err.message)//Cannot read properties of undefined (reading 'jlo')
        
    }


    try{
    let c = 8;
     let d = c.name.al

    }catch(err){
      throw new Error("This is the problem dude")  

    }
    finally{
        console.log("huihui")

    }


    