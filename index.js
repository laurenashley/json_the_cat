// index.js

const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

if (breedName === undefined) {
  console.log('Please provide a breed name.');
  return false;
}

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    if (desc === null) {
      console.log('Breed name was not found.');
    } else {
      console.log(`Description of the ${breedName} cat breed: ${desc}`);
    }
  }
});