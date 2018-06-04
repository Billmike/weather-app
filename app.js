const request = require('request');
const dotenv = require('dotenv');
const yargs = require('yargs');

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

console.log(argv)

const encodedAddress = encodeURIComponent(argv.address);

request(
  {
    url:
      `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.API_KEY}&address=${encodedAddress}`,
    json: true
  },
  (err, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  }
);
