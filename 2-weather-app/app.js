require("dotenv").config();
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv.slice(2)[0];

if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, geocodeData) => {
    if (error) {
      return console.log(error);
    }

    const { latitude, longitude, location } = geocodeData;

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}
