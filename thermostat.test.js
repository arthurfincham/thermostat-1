const { describe } = require('jest-circus');
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
    test('temperature cannot be set lower than 10', () => {
      for (let i = 0 ; i < 20 ; i++) {
        thermostat.down()
      }
      expect(thermostat.getTemperature()).toEqual(10);
    })
  });
  describe('.reset', () => {
    test('resets the target temperature to 20', () => {
      thermostat.up()
      expect(thermostat.getTemperature()).toEqual(21);
      thermostat.reset()
      expect(thermostat.getTemperature()).toEqual(20);
    })
  })
  describe('Power Saving Mode', () => {
    test('is on by default', () => {
      expect(thermostat.getPowerSavingMode()).toBe(true);
    })
    describe('.setPowerSavingMode', () => {
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
    })
    test('when on max temperature cannot exceed 25', () => {
      for (let i = 0 ; i < 20 ; i++) {
        thermostat.up()
      }
      expect(thermostat.getTemperature()).toEqual(25);
    })
    test('when off max temperature cannot exceed 30', () => {
      thermostat.setPowerSavingMode(false);
      for (let i = 0 ; i < 20 ; i++) {
        thermostat.up()
      }
      expect(thermostat.getTemperature()).toEqual(30);
    })
  });
  describe('.getUsage', () => {
    test('Low usage when below 18', () => {
      thermostat.down()
      thermostat.down()
      thermostat.down()
      expect(thermostat.getUsage()).toEqual('Low-usage');
    })
    test('High usage when above 25', () => {
      thermostat.setPowerSavingMode(false);
      for (let i = 0 ; i < 20 ; i++) {
        thermostat.up()
      }
      expect(thermostat.getUsage()).toEqual('High-usage');
    })
    test('Medium usage when between 18 and 25 (inclusive)', () => {
      thermostat.setPowerSavingMode(false);
      for (let i = 0 ; i < 5 ; i++) {
        thermostat.up()
      }
      expect(thermostat.getUsage()).toEqual('Medium-usage');
    })
  });

  describe("Set city", () => {
    test("can accept a city as an argument", () => {
      thermostat.setCity('London');
      expect(thermostat.getCity()).toEqual('London');
    });

    test("a new instance of Weather is called", () => {
      thermostat.setCity("London");
      expect(thermostat.getTemperature()).toEqual(mockWeather.temperature);
    });
  })
});