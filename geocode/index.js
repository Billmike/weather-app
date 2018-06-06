const request = require('request');

const geoCodeAddress = (address, callback) => {
  const encodedAddress = encodeURIComponent(address);

  request(
    {
      url:
        `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.API_KEY}&address=${encodedAddress}`,
      json: true
    },
    (err, response, body) => {
      if (err) {
        callback('Unable to connect to google servers')
      } else if (body.status === 'ZERO_RESULTS') {
        callback(`Cannot find ${address} in our directory of addresses.`)
      } else if (body.status === 'OK') {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }
  );
}

module.exports = {
  geoCodeAddress
};
