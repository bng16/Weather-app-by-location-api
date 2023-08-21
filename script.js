const apilink="https://api.openweathermap.org/data/2.5/weather?q="

const unitApikey="&units=metric&appid=a8ed953e43365c4db0216ea87e9cfcf0";

const searchbox=document.querySelector("#search-box")
const searchbutt=document.querySelector("#search-butt")

const weatherIcon=document.querySelector("#weather-icon")
const bgVideo=document.querySelector("#bg-video")


async function checkWeather(city){
    const response= await fetch(apilink+city+unitApikey);

    if(response.status==404){
        document.querySelector("#error").style.display="block";
        bgVideo.src="asset/error.mp4";
    }
    else{
        var data=await response.json();

    console.log(data);

    document.querySelector("#city").innerHTML=data.name;
    document.querySelector("#temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector("#Humidity").innerHTML=`${data.main.humidity}%`;
    document.querySelector("#wind").innerHTML=`${data.wind.speed} km/hr`;

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="asset/clouds.png";
        bgVideo.src="asset/clouds"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="asset/clear.png";
        bgVideo.src="asset/clear";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="asset/rain.png";
        bgVideo.src="asset/rain.mp4";

    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="asset/drizzle.png";
        bgVideo.src="asset/drizzle.mp4";

    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="asset/mist.png";
        bgVideo.src="asset/mist.mp4";

    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="asset/snow.png";
        bgVideo.src="asset/snow.mp4";

    }
    }



}

searchbutt.addEventListener("click", ()=>{
    
    checkWeather(searchbox.value.trim());

})


// https://api.openweathermap.org/data/2.5/weather?q=Agartala&appid=a8ed953e43365c4db0216ea87e9cfcf0&units=metric