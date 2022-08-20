const request = require("request");

const geocode = (address, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=934aee0dbe9fc6e79cf9af9f5e60c41d&query=" +
    address;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.location.lat,
        longitude: body.location.long,
        location: body.location.name,
      });
    }
  });
};

module.exports = geocode;
