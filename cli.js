const readlineSync = require('readline-sync')
const Thermostat = require('./thermostat')

readlineSync.setDefaultOptions({prompt: 'Enter command > '});

// let userName = readlineSync.question('What is your name? ');
// console.log(`Welcome ${userName}!`)

// create thermostat instance
const thermostat = new Thermostat();

const printTemp = () => {
  console.log(`Temperature is ${thermostat.getTemperature()}`);
};

readlineSync.promptCLLoop({
  up: function() {
    thermostat.up();
    printTemp();
  },
  down: function() {
    thermostat.down();
    printTemp();
  },
  exit: function() { return true; }
});
console.log('Exited');



