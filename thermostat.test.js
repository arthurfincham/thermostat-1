const Thermostat = require('./thermostat')

describe('Thermostat', () => {

  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe('.getTemperature', () => {
    test('defines a function', () => {
      expect(typeof thermostat.getTemperature).toBe('function');
    })
    test('defaults to 20', () => {
      expect(thermostat.getTemperature()).toEqual(20);
    })
  });
  describe('.up', () => {
    test('increases the temperature by 1', () => {
      thermostat.up()
      expect(thermostat.getTemperature()).toEqual(21);
    })
    test('increases the temperature by 2', () => {
      thermostat.up()
      thermostat.up()
      expect(thermostat.getTemperature()).toEqual(22);
    })
  })
});