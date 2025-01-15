const apikey="1b32026168631e2689b68472cd6ac240"
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector("#yourid");
const searchBtn = document.querySelector("#myid");
const weatherIcon = document.querySelector(".icon");

async function checkWeather(city) 
{
    const response = await fetch(apiurl + city +`&appid=${apikey}`)


    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".wicon").style.display="none"
    }
    else{

        document.querySelector(".wicon").style.display="block";
        document.querySelector(".error").style.display="none"


        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if(data.weather[0].main =="Cloud"){ 
            weatherIcon.src="hello.png";}
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src="clear-removebg-preview.png";}

        else if(data.weather[0].main == "Rain"){
        weatherIcon.src="barshacloud2-removebg-preview.png";}    

        else if(data.weather[0].main == "Drizzle"){
             weatherIcon.src="drijel-removebg-preview.png";}

        else if(data.weather[0].main == "Mist"){ 
            weatherIcon.src="mist_image.png";}
    }
                 
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
