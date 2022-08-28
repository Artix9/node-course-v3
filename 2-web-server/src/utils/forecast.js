const request = require("request");
const weatherApiAccessKey = process.env.WEATHER_API_ACCESS_KEY;

const forecast = (latitude, longitude, callback) => {
  const weatherURL = `http://api.weatherstack.com/current?access_key=${weatherApiAccessKey}&query=${latitude},${longitude}`;

  request({ url: weatherURL, json: true }, (error, response) => {
    // Low-level error
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } // Coordinate error
    else if (response.body.error) {
      callback("Unable to find locaiton", undefined);
    } // Success
    else {
      const currentWeather = response.body.current;
      callback(
        undefined,
        `${currentWeather.weather_descriptions[0]}. It is currently ${currentWeather.temperature} degrees out. It feels like ${currentWeather.feelslike} degrees out`
      );
    }
  });
};

module.exports = forecast;
