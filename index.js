function cityWeather(response) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = response.data.name;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}`;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `Humadity: ${response.data.main.humidity}%`;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].main;
    let iconElement = document.querySelector ("#icon");
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
  
    let searchForm = document.querySelector("#search");
  searchForm.addEventListener("click", buttonSubmit);
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

  
  