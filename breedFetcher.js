// breedFetcher.js

const request = require('request');
const api = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedData = (breed) => {
  const resource = api + breed;

  request(resource, (error, response, body) => {
    const data = JSON.parse(body);
    console.log(`Description of the ${breed} cat breed: ${data[0]['description']}`);
  });
};

fetchBreedData('Siberian');