const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  const thermostat = new Thermostat();

  describe('.getTemperature', () => {
    test('defines a function', () => {
      expect(typeof thermostat.getTemperature).toBe('function');
    })
    test('defaults to 20', () => {
      expect(thermostat.getTemperature()).toEqual(20);
    })
  });
});