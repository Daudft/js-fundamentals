




async function weather(city){

    
    try{
        let api = "c7ef898305f1942eb48c2e4e87ba9ba0";
        let rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
        if(!rawData.ok){
            throw new Error("City not found")
        }
       let realData = await rawData.json();
       console.log(realData.main);

    }catch(err){
        console.log(err.message)

    }
    
}
    
weather("Lahore");


