const apilink="https://api.openweathermap.org/data/2.5/weather?q="

const unitApikey="&units=metric&appid=a8ed953e43365c4db0216ea87e9cfcf0";

const searchbox=document.querySelector("#search-box")
const searchbutt=document.querySelector("#search-butt")


async function checkWeather(city){
    const response= await fetch(apilink+city+unitApikey);

    var data=await response.json();

    console.log(data);

    document.querySelector("#city").innerHTML=data.name;
    document.querySelector("#temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector("#Humidity").innerHTML=`${data.main.humidity}%`;
    document.querySelector("#wind").innerHTML=`${data.wind.speed} km/hr`;




}

searchbutt.addEventListener("click", ()=>{
    
    checkWeather(searchbox.value.trim());

})


// https://api.openweathermap.org/data/2.5/weather?q=Agartala&appid=a8ed953e43365c4db0216ea87e9cfcf0&units=metric