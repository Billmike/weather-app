const request = require('request');

const geoCodeAddress = (address) => {
  const encodedAddress = encodeURIComponent(address);

  request(
    {
      url:
        `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.API_KEY}&address=${encodedAddress}`,
      json: true
    },
    (err, response, body) => {
      if (err) {
        console.log('Unable to connect to google servers.')
      } else if (body.status === 'ZERO_RESULTS') {
        console.log(`Cannot find ${argv.address} in our directory of addresses.`)
      } else if (body.status === 'OK') {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      }
    }
  );
}

module.exports = {
  geoCodeAddress
};
