require("dotenv").config();
const http = require("http");
const weatherApiAccessKey = process.env.WEATHER_API_ACCESS_KEY;

const latitude = 40;
const longitude = -75;

const weatherURL = `http://api.weatherstack.com/current?access_key=${weatherApiAccessKey}&query=${latitude},${longitude}`;

const request = http.request(weatherURL, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
