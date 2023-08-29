const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animals = data.species.find((specie) => specie.name === animal);
  if (animals === undefined) {
    return 'Não há animais com esse nome!';
  }
  const lookToTheAge = animals.residents.reduce((acc, resident) => {
    if (resident.age < age) {
      return false;
    }

    return acc;
  }, true);

  return lookToTheAge;
};

// console.log(getAnimalsOlderThan('lions', 5));

module.exports = getAnimalsOlderThan;
