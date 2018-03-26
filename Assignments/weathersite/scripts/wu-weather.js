var weatherObject = new XMLHttpRequest();
var weatherObject2 = new XMLHttpRequest();

var weatherObject3 = new XMLHttpRequest();
var weatherObject4 = new XMLHttpRequest();

var weatherObject5 = new XMLHttpRequest();
var weatherObject6 = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/d395ba8f0dfd08d9/conditions/q/MN/Franklin.json', true);
weatherObject2.open('GET','http://api.wunderground.com/api/d395ba8f0dfd08d9/forecast/q/MN/Franklin.json', true);

weatherObject3.open('GET','http://api.wunderground.com/api/d395ba8f0dfd08d9/conditions/q/SC/Greenville.json', true);
weatherObject4.open('GET','http://api.wunderground.com/api/d395ba8f0dfd08d9/forecast/q/SC/Greenville.json', true);

weatherObject5.open('GET','http://api.wunderground.com/api/d395ba8f0dfd08d9/conditions/q/MO/Springfield.json', true);
weatherObject6.open('GET','http://api.wunderground.com/api/d395ba8f0dfd08d9/forecast/q/MO/Springfield.json', true);

weatherObject.send();
weatherObject2.send();

weatherObject3.send();
weatherObject4.send();

weatherObject5.send();
weatherObject6.send();

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
     
//     Greenville
     
     weatherObject3.onload = function () {
        var weatherInfo = JSON.parse(weatherObject3.responseText);
        console.log(weatherInfo);

        document.getElementById('conditions').innerHTML = weatherInfo.current_observation.weather;
        document.getElementById('temperature').innerHTML = weatherInfo.current_observation.temp_f;
        document.getElementById('wind-speed').innerHTML = weatherInfo.current_observation.wind_mph;
        document.getElementById('icon').src = weatherInfo.current_observation.icon_url;
    }

     weatherObject4.onload = function () {
        var weatherInfo2 = JSON.parse(weatherObject4.responseText);
        console.log(weatherInfo4);

        document.getElementById('forecast').innerHTML = weatherInfo4.forecast.txt_forecast.forecastday["0"].fcttext;

    }
     
//     Springfield
     
          weatherObject5.onload = function () {
        var weatherInfo = JSON.parse(weatherObject5.responseText);
        console.log(weatherInfo);

        document.getElementById('conditions').innerHTML = weatherInfo.current_observation.weather;
        document.getElementById('temperature').innerHTML = weatherInfo.current_observation.temp_f;
        document.getElementById('wind-speed').innerHTML = weatherInfo.current_observation.wind_mph;
        document.getElementById('icon').src = weatherInfo.current_observation.icon_url;
    }

     weatherObject6.onload = function () {
        var weatherInfo2 = JSON.parse(weatherObject6.responseText);
        console.log(weatherInfo4);

        document.getElementById('forecast').innerHTML = weatherInfo4.forecast.txt_forecast.forecastday["0"].fcttext;

    }
     
     