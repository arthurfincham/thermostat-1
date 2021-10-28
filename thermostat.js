require('dotenv').config()
const Weather = require('./weather')

class Thermostat {
  constructor(weather) {
    this.temperature = 20;
    this.psm = true;
    this.minTemp = 10;
    this.maxTemp = 25;
    this.city = null;
    this.weather = weather;
  }
  getTemperature() {
    return this.temperature;
  }
  up() {
    if (this.temperature < this.maxTemp) {
      this.temperature += 1;
    }
  }
  down() {
    if (this.temperature > this.minTemp) {
      this.temperature -= 1;
    }
  }
  reset() {
    this.temperature = 20;
  }
  getPowerSavingMode() {
    return this.psm;
  }
  setPowerSavingMode(bool) {
    if (bool === true) {
      this.psm = true;
      this.maxTemp = 25;
    } else if (bool === false) {
      this.psm = false;
      this.maxTemp = 30;
    } else {
      throw new Error('Must be a boolean.');
    }
  }
  getUsage() {
    if (this.temperature < 18) {
      return 'Low-usage';
    } else if (this.temperature > 25) {
      return 'High-usage';
    } else {
      return 'Medium-usage';
    }
  }
  setCity(city){
    this.city = city;
    this.weather.fetchWeatherData(city, (weatherData) => {
      this.temperature = weatherData
    });
  }
  getCity(){
    return this.city;
  }
}

module.exports = Thermostat;