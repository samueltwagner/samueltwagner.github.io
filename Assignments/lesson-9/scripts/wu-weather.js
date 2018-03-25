var weatherObject = new XMLHttpRequest();
var weatherObject2 = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/d395ba8f0dfd08d9/conditions/q/MN/Franklin.json', true);
weatherObject2.open('GET','http://api.wunderground.com/api/d395ba8f0dfd08d9/forecast/q/MN/Franklin.json', true);

weatherObject.send();
weatherObject2.send();

    weatherObject.onload = function () {
        var weatherInfo = JSON.parse(weatherObject.responseText);
        console.log(weatherInfo);

        document.getElementById('conditions').innerHTML = weatherInfo.current_observation.weather;
        document.getElementById('temperature').innerHTML = weatherInfo.current_observation.temp_f;
        document.getElementById('wind-speed').innerHTML = weatherInfo.current_observation.wind_mph;
        document.getElementById('icon').src = weatherInfo.current_observation.icon_url;
    }

     weatherObject2.onload = function () {
        var weatherInfo2 = JSON.parse(weatherObject2.responseText);
        console.log(weatherInfo2);

        document.getElementById('forecast').innerHTML = weatherInfo2.forecast.txt_forecast.forecastday["0"].fcttext;

    }