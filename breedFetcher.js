// breedFetcher.js

const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const desc = JSON.parse(body)[0] === undefined ? null : JSON.parse(body)[0]['description'];
      callback(error, desc);
    }
  });
};

module.exports = {
  fetchBreedDescription
};