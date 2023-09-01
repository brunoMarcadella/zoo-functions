const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const { species } = data;
  const personId = data.employees.find((employee) => employee.id === id);
  let oldestAnimal = { age: 0 };
  species.find((specie) => specie.id === personId.responsibleFor[0]).residents.forEach((resid) => {
    if (resid.age > oldestAnimal.age) {
      oldestAnimal = resid;
    }
  });

  return Object.values(oldestAnimal);
};

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
