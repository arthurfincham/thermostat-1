class Thermostat {
  constructor() {
    this.temperature = 20;
    this.psm = true;
  }
  getTemperature() {
    return this.temperature;
  }
  up() {
    this.temperature += 1
  }
  down() {
    this.temperature -= 1
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