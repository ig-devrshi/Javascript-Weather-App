const apiKey = "a47ed8ea85bd4cffcd66edb1841afa84";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.getElementById("name");
const searchBtn = document.getElementById("submit-btn");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var display_weather = document.getElementById("weather");
        display_weather.classList.add("display-weather");
        document.querySelector(".error").style.display = "none";

        var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
        document.querySelector(".humid").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "kmph";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "weather-app-img/images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "weather-app-img/images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "weather-app-img/images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "weather-app-img/images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "weather-app-img/images/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "weather-app-img/images/snow.png";
        }

        
    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

//
