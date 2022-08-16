const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=763fbd72227d245c84d66de55d43b087&query=37.8267,-122.4233";

request(url, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
