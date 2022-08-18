const request = require("request");
require("dotenv").config();
const weatherApiAccessKey = process.env.WEATHER_API_ACCESS_KEY;
const geoCodeApiAccessKey = process.env.GEOCODE_API_ACCESS_KEY;

// const weatherURL = `http://api.weatherstack.com/current?access_key=${weatherApiAccessKey}&query=37.8267,-122.4233&units=f`;

// request({ url:weatherURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     const currentWeather = response.body.current;
//     const temp = currentWeather.temperature;
//     const feelslike = currentWeather.feelslike;
//     const weatherDescriptions = currentWeather.weather_descriptions[0];

//     console.log(
//       `${weatherDescriptions}. It is currently ${temp} degrees out. It feels like ${feelslike} degrees out`
//     );
//   }
// });

const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${geoCodeApiAccessKey}&limit=1`;

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try another search.");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
