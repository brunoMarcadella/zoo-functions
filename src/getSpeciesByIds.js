const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const foundSpecies = [];
  ids.forEach((id) => {
    const findSpeciesId = data.species.find((specie) => specie.id === id);
    if (findSpeciesId !== undefined) {
      return foundSpecies.push(findSpeciesId);
    }
    return foundSpecies.push();
  });

  return foundSpecies;
};

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
