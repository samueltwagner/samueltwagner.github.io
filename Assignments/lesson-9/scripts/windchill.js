/*jshint -W065 */

//The formula to calculate the wind chill factor is:
//f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 
//where f is the wind chill factor in Fahrenheit, t is the air average temperature in //Fahrenheit, and s is the wind speed in miles per hour.

var temperature = document.getElementById("temp");
var windspeed = document.getElementById("wind");

function computewindchill(temperature, windspeed) {

	var t = parseInt(temperature, radix); // OK - parse string to number
	var s = parseInt(windspeed, radix);
	var f = 35.74 + (0.6215 * t) - 35.75 * (Math.pow(s, 0.16)) + 0.4275 * (t * Math.pow(s, 0.16));

	document.getElementById("output").innerHTML = "The value is <strong>" + f.toFixed(2) + "</strong>!";
}


new weatherObject = new XMLHttpRequest();
      
      weatherObject.open('GET','http://api.wunderground.com/api/d395ba8f0dfd08d9/conditions/q/CA/San_Francisco.json', true);
      
      weatherObject.send();
      weatherObject.onload() = function () {
          var weatherInfo = JSON.parse(weatherObject.responseText);
          console.log(weatherInfo);
          
      }