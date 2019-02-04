let weatherRequest = new XMLHttpRequest();

var apiURL = 'https://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=51050b6359fc3c509bc95424154ae8ec';

weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload =  function () {
  let weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);
  document.getElementById("current-temp").innerHTML = weatherData.main.temp;
}
