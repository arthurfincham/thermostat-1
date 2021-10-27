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
  });
  describe('.down', () => {
    test('decreases the temperature by 1', () => {
      thermostat.down()
      expect(thermostat.getTemperature()).toEqual(19);
    })
    test('decreases the temperature by 2', () => {
      thermostat.down()
      thermostat.down()
      expect(thermostat.getTemperature()).toEqual(18);
    })
  });
  describe('Power Saving Mode', () => {
    test('is on by default', () => {
      expect(thermostat.getPowerSavingMode()).toBe(true);
    })
    test('can be turned off', () => {
      thermostat.setPowerSavingMode(false);
      expect(thermostat.getPowerSavingMode()).toBe(false);
    })
    test('can be turned on again', () => {
      thermostat.setPowerSavingMode(false);
      thermostat.setPowerSavingMode(true);
      expect(thermostat.getPowerSavingMode()).toBe(true);
    })
    test('must be provided with a boolean', () => {
      expect(() => {
        thermostat.setPowerSavingMode();
      }).toThrow('Must be a boolean.')
    })
  });
});