const apiKey = "a47ed8ea85bd4cffcd66edb1841afa84";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.getElementById("name");
const searchBtn = document.getElementById("submit-btn");
const card = document.getElementById("card");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var display_weather = document.getElementById("weather");
    display_weather.classList.add("display-weather");
    document.querySelector(".error").style.display = "none";

    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.floor(data.main.temp) + "°C";
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    var card = document.getElementById("card");

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "weather-app-img/images/clouds.png";
      document.querySelector(".card").style.background =
        "linear-gradient(150deg, rgb(120, 228, 255), rgb(30, 63, 69))";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "weather-app-img/images/clear.png";
      document.querySelector(".card").style.background =
        "linear-gradient(150deg, rgb(255, 222, 151), rgb(87, 49, 5))";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "weather-app-img/images/rain.png";
      document.querySelector(".card").style.background =
        "linear-gradient(150deg, rgb(18, 96, 169), rgb(4, 32, 56))";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "weather-app-img/images/drizzle.png";
      document.querySelector(".card").style.background =
        "linear-gradient(150deg, rgb(255, 216, 100), rgb(31, 65, 83))";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "weather-app-img/images/mist.png";
      document.querySelector(".card").style.background =
        "linear-gradient(150deg, rgb(197, 221, 208), rgb(44, 58, 50))";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "weather-app-img/images/snow.png";
      document.querySelector(".card").style.background =
        "linear-gradient(150deg, rgb(233, 233, 233), rgb(110, 110, 110))";
    }
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});


