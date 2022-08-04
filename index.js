function cityWeather(response) {
    let h1 = document.querySelector("h1");
    let temperatureElement = document.querySelector("#temperature");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let descriptionElement = document.querySelector("#description");
    let iconElement = document.querySelector ("#icon");
    
  celsiusTemperature = response.data.main.temp;

  h1.innerHTML = response.data.name;
  temperatureElement.innerHTML = `${Math.round(celsiusTemperature)}`;
humidityElement.innerHTML = `Humadity: ${response.data.main.humidity}%`;
windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
descriptionElement.innerHTML = response.data.weather[0].main;
iconElement.setAttribute ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}
  
  function searchCity(city) {
    let apiKey = "e0011d9afadcdf29795388bf3f4d5677";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(cityWeather);
  }
  function buttonSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#input-city").value;
    searchCity(city);
  }
  function showFahrenheitTemp (event) {
        event.preventDefault ();
        celsiusLink.classList.remove ("active");
        fahrenheitLink.classList.add ("active");
        let fahrenheitTemp = (celsiusTemperature * 9)/5 + 32;
        let temperatureElement = document.querySelector ("#temperature");
        temperatureElement.innerHTML = Math.round(fahrenheitTemp);
    
    }
    function showCelsiusTemp (event) {
        event.preventDefault ();
        fahrenheitLink.classList.remove ("active");
        celsiusLink.classList.add ("active");
        let temperatureElement = document.querySelector ("#temperature");
        temperatureElement.innerHTML = Math.round (celsiusTemperature);
   }
        let searchForm = document.querySelector("#search");
  searchForm.addEventListener("click", buttonSubmit);
    
   let celsiusTemperature = null;
    let fahrenheitLink = document.querySelector ("#fahrenheit-link");
       fahrenheitLink.addEventListener ("click", showFahrenheitTemp);
       let celsiusLink = document.querySelector ("#celsius-link");
       celsiusLink.addEventListener ("click", showCelsiusTemp);
searchCity(city);
        

function searchLocation(position) {
    let apiKey = "e0011d9afadcdf29795388bf3f4d5677";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(cityWeather);
  }
  navigator.geolocation.getCurrentPosition(searchLocation);
      
       



  
  
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[now.getDay()];
  let currentDatePosition = now.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentMonth = months[now.getMonth()];
  let currentYear = now.getFullYear();
  let currentHour = now.getHours();
  if (currentHour < 10){
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = now.getMinutes();
  if (currentMinutes < 10){
    currentMinutes = `0${currentMinutes}`;
  }
  let currentShowDate = document.querySelector("#currentDate");
  currentShowDate.innerHTML = `${currentDay}, ${currentDatePosition} ${currentMonth} ${currentYear}`;
   let currentShowTime = document.querySelector ("#currentTime");
   currentShowTime.innerHTML = `Last update: ${currentHour}:${currentMinutes}`;


  
  