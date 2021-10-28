require('dotenv').config()
const got = require('got');
// const apiKey = process.env.API_KEY; // paste your API key here
// const city = 'London';
// const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

class Weather {
  fetchWeatherData = (city, weatherData) => {
    const apiKey = process.env.API_KEY; // paste your API key here
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    got(apiUrl).then((response) => {
        const wevva = JSON.parse(response.body);
        weatherData(wevva.main.temp);
    });
  }
}

module.exports = Weather;

// const weather = new Weather();
// weather.fetchWeatherData('London', (weatherData) => {
//   console.log(weatherData);
// });