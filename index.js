function cityWeather(response) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = response.data.name;
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(response.data.main.temp)} °C`;
    let humidity = document.querySelector("#humidity");
    humadity.innerHTML = `humidity: ${response.data.main.humidity}%`;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    document.querySelector("#description").innerHTML =
      response.data.weather[0].main;
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
  
  function searchLocation(position) {
    let apiKey = "e0011d9afadcdf29795388bf3f4d5677";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(cityWeather);
  }
  
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", buttonSubmit);
  
  let currentLocationButton = document.querySelector("#current");
  current.addEventListener("click", getCurrentLocation);
  
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
  let currentDate = now.getDate();
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
  let h4 = document.querySelector("h4");
  h4.innerHTML = `${currentDate} ${currentMonth} ${currentYear}, ${currentDay}`;
  searchCity("Kyiv");
  