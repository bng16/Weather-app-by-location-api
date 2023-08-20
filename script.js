const apilink="https: / /api.openweathermap.org/data/2.5/weather?units=metric&g=bangalore";
const apikey="a8ed953e43365c4db0216ea87e9cfcf0";

function checkWeather(){
    const response= await fetch(apilink+`&appid=${apikey}`)

    var data=await response.json();

    console.log(data)
}

checkWeather()