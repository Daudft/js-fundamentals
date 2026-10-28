function greet(name,cb){
    console.log("Hello " + name);
    cb();
}
greet("Ali",function(){
    console.log("Welcome!")
})


function abc(name,cb){
    setTimeout(() => {
        cb(function(){
            console.log("Mai Phla CB")
           

        });
    }, 3000);
}

abc("clics",function(cb){
    console.log("Hlo");
    setTimeout(() => {
        cb();
        
    }, 1000);
    
})


function dataLao(name,cb){
    console.log("Data Loading....");
    setTimeout(function(){
        cb({name:"ali",age: 23});

    },2000)
    
}



dataLao("ali",function(data){
    console.log(data)
})

//Q1

function afterDelay(time,cb){
    setTimeout(()=>{
        cb();
    },time)
}
afterDelay(5000,function(){
    console.log("Callback Executed")
})



//Q2
function getUser(username,cb){
    console.log("Data Loading......")
    setTimeout(()=>{
        cb({id:1,userName:"Khan"})
    },1000)


}

function getUserPosts(userId,cb){
    console.log("Post Loading......")

    setTimeout(()=>{
        cb(["Hlo","Hey"]);
    },2000)

}

getUser("Khan",function(data){
    console.log(data.userName);
    getUserPosts(data.id,function(post){
        console.log(post)
    })
})



//Q3 
function loginUser(name,cb){
    console.log("Data Loading......")
    setTimeout(()=>{
        cb({name:"yoyo",age:24,id:1})

    },1000)

}

function fetchPermissions(userId,cb){
    console.log("waiting for permissions")
    setTimeout(()=>{
        cb(["Permission Granted"])

    },2000)
}

function loadDashboard(permission,cb){
    console.log("Loading Dashboard")
    setTimeout(()=>{
        cb();

    },3000)

}


loginUser("haya",function(data){
    console.log(data);
    
    fetchPermissions(data.id,function(data){
        console.log(data);
        
        loadDashboard(data.permission,function(){
            console.log("Dashborad loaded")
        })
    })
    
})


//Promise

let prm = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },3000)
})

prm
.then(function(){
    console.log("hlo resolved");
})
.catch(function(){
    console.log("hlo rejected")
})