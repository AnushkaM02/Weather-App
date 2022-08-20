const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=934aee0dbe9fc6e79cf9af9f5e60c41d&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "It is currently " +
          body.current.temperature +
          " degress out. It feels like " +
          body.current.feelslike +
          " degrees. "
      );
    }
  });
};

module.exports = forecast;

// const request = require("request");

// const forecast = (latitude, longitude, callback) => {
//   const url =
//     "http://api.weatherstack.com/current?access_key=1e77963d40f7eccfd28ec8d938f7ea0f&query=" +
//     latitude +
//     "," +
//     longitude +
//     "&units=f";

//   //   console.log(url);

//   request({ url, json: true }, (error, { body }) => {
//     if (error) {
//       callback("Unable to connect to weather service", undefined);
//     } else if (body.error) {
//       callback("Unable to find locaton", undefined);
//     } else {
//       callback(
//         undefined,
//         `It is ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees.`
//       );
//     }
//   });
// };

// module.exports = forecast;
