var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','https://byui-cit230.github.io/weather/data/towndata.json', true);

weatherObject.send();

weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('franklin').innerHTML = weatherInfo.towns["0"].name;
    document.getElementById('greenville').innerHTML = weatherInfo.towns["1"].name;
    document.getElementById('springfield').innerHTML = weatherInfo.towns["3"].name;

    document.getElementById('f-motto').innerHTML = weatherInfo.towns["0"].motto;
    document.getElementById('g-motto').innerHTML = weatherInfo.towns["1"].motto;
    document.getElementById('s-motto').innerHTML = weatherInfo.towns["3"].motto;

    document.getElementById('f-year').innerHTML = weatherInfo.towns["0"].yearFounded;
    document.getElementById('g-year').innerHTML = weatherInfo.towns["1"].yearFounded;
    document.getElementById('s-year').innerHTML = weatherInfo.towns["3"].yearFounded;

    document.getElementById('f-population').innerHTML = weatherInfo.towns["0"].currentPopulation;
    document.getElementById('g-population').innerHTML = weatherInfo.towns["1"].currentPopulation;
    document.getElementById('s-population').innerHTML = weatherInfo.towns["3"].currentPopulation;

    document.getElementById('f-rain').innerHTML = weatherInfo.towns["0"].averageRainfall;
    document.getElementById('g-rain').innerHTML = weatherInfo.towns["1"].averageRainfall;
    document.getElementById('s-rain').innerHTML = weatherInfo.towns["3"].averageRainfall;
    }