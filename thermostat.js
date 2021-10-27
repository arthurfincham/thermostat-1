class Thermostat {
  constructor() {
    this.temperature = 20;
    this.psm = true;
    this.minTemp = 10;
    this.maxTemp = 25;
  }
  getTemperature() {
    return this.temperature;
  }
  up() {
    this.temperature += 1
  }
  down() {
    if (this.temperature > this.minTemp) {
      this.temperature -= 1;
    }
  }
  getPowerSavingMode() {
    return this.psm;
  }
  setPowerSavingMode(bool) {
    if (bool === true) {
      this.psm = true;
    } else if (bool === false) {
      this.psm = false;
    } else {
      throw new Error('Must be a boolean.');
    }
  }
}

module.exports = Thermostat;