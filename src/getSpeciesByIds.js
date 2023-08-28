const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const array = [];
  const forEachId = ids.find((id) => {
    const find = data.species.find((specie) => specie.id === id);
    if (find !== undefined) {
      array.push(find);
    }
  });

  return array;
};

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
