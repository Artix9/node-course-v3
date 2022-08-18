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

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
