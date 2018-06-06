const request = require('request');
const dotenv = require('dotenv');
const yargs = require('yargs');

const encodeAddress = require('./geocode/index').geoCodeAddress;
const weather = require('./weather/weather').getWeather;

dotenv.config();

const { argv } = yargs.options({
  address: {
    alias: 'a',
    demand: true,
    describe: 'Address to fetch weather for',
    string: true,
  }
})
  .help()
  .alias('help', 'h');

encodeAddress(argv.address, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result.address)

    weather(result.latitude, result.longitude, (error, response) => {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
      }
    });
  }
});
