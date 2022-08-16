const request = require("request");
require("dotenv").config();
const accessKey = process.env.WEATHER_API_ACCESS_KEY;

const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=37.8267,-122.4233&units=f`;

request({ url, json: true }, (error, response) => {
  const currentWeather = response.body.current;
  const temp = currentWeather.temperature;
  const feelslike = currentWeather.feelslike;
  const weatherDescriptions = currentWeather.weather_descriptions[0];

  console.log(
    `${weatherDescriptions}. It is currently ${temp} degrees out. It feels like ${feelslike} degrees out`
  );
});
