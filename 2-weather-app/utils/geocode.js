const request = require("request");
const geoCodeApiAccessKey = process.env.GEOCODE_API_ACCESS_KEY;

const geocode = (address, callback) => {
  const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${geoCodeApiAccessKey}&limit=1`;

  request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to locations services", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      const features = response.body.features[0];
      callback(undefined, {
        latitude: features.center[1],
        longitude: features.center[0],
        location: features.place_name,
      });
    }
  });
};

module.exports = geocode;
