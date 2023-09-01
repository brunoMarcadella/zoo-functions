const data = require('../data/zoo_data');

const countAnimals = (animal = 'all Animals') => {
  if (Object.keys(animal).length === 1) {
    const quantity = data.species.find((specie) => specie.name === animal.species).residents.length;
    return quantity;
  } if (Object.keys(animal).length === 2) {
    const findSpecie = data.species.find((specie) => specie.name === animal.species);
    const quantity = findSpecie.residents.reduce((acc, resident) => {
      if (resident.sex === animal.sex) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return quantity;
  }
  const allAnimalsPopularity = {};
  data.species.forEach((specie) => {
    allAnimalsPopularity[specie.name] = specie.residents.length;
  });
  return allAnimalsPopularity;
};

// console.log(countAnimals());
module.exports = countAnimals;
