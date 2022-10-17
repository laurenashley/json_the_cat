// breedFetcher.js

const request = require('request');
const args = process.argv.slice(2);
const api = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breed = args[0];

const fetchBreedData = (breed) => {
  const resource = api + breed;

  return request(resource, (error, response, body) => {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log('Breed name was not found.');
    } else {
      console.log(`Description of the ${breed} cat breed: ${data[0]['description']}`);
    }
  });
};
if (breed === undefined) {
  console.log('Please provide a breed name.');
  return false;
} else {
  fetchBreedData(breed);
}