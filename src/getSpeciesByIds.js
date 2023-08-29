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

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
