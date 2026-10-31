




// async function weather(city){

    
//     try{
//         let api = "c7ef898305f1942eb48c2e4e87ba9ba0";
//         let rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
//         if(!rawData.ok){
//             throw new Error("City not found")
//         }
//        let realData = await rawData.json();
//        console.log(realData.main);

//     }catch(err){
//         console.log(err.message)

//     }
    
// }
    
// weather("Lahore");



async function weatherApp(city){

    try{
        let api = "c7ef898305f1942eb48c2e4e87ba9ba0"
let rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
console.log(rawData)

if(!rawData.ok){
    throw new Error("City Not Found")
  
}
  let realData = await rawData.json();
console.log(realData.name)
console.log(realData.main.temp)


    }catch(err){
        console.log(err)

    }
    
}
weatherApp("Lahore")




//debouncing and throttling
// Imagine you’re typing in a search box, and the app fires a request on every single keystroke. That’s wasteful. Debouncing and throttling are two ways to control how often a function runs.

// Debouncing means “wait until the user stops.” Every time the event fires, the timer resets. The function only runs after a quiet pause. Think of an elevator door: each person who walks in makes the door wait a bit longer, and it only closes once nobody has entered for a few seconds. For a search box, if you set a 500ms debounce, the search only fires once the user has stopped typing for half a second. Typing “hello” quickly gives you one request, not five.

// Throttling means “run at most once per time window.” The function runs right away, then ignores every call until the window is over. Think of a machine gun with a fixed fire rate: you can hold the trigger as long as you like, but bullets only come out at a set pace. For scrolling, if you set a 200ms throttle, your scroll handler runs at most five times per second, no matter how fast the user scrolls.

// The simple difference: debounce waits for the activity to finish and then runs once at the end. Throttle runs steadily during the activity, but with a speed limit.

// When to use which:

// Debounce: search boxes, form validation, auto-save, window resize (when you only care about the final size)
// Throttle: scroll events, mouse movement, button spamming, drag and drop



