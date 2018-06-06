const request = require('request');

const getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/e24842679287cfcce31bf6523742e9bc/${latitude},${longitude}`,
    json: true
  }, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      const { temperature, apparentTemperature } = body.currently;
      if (temperature == apparentTemperature) {
        callback(`The current temperature is ${apparentTemperature}`)
      } else {
      callback(`The current temperature is ${apparentTemperature}, but it feels like ${temperature}`);        
      }
    } else {
      callback('Unable to fetch weather.');
    }
  });
}

module.exports.getWeather = getWeather;
