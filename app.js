const request = require('request');
const dotenv = require('dotenv');

dotenv.config();

request(
  {
    url:
      `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.API_KEY}&address=1301%20lombard%20street%20philadelphia`,
    json: true
  },
  (err, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  }
);
