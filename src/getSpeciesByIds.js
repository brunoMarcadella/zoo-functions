const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const array = [];
  ids.forEach((id) => {
    const find = data.species.find((specie) => specie.id === id);
    if (find !== undefined) {
      return array.push(find);
    }
    return array.push();
  });

  return array;
};

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
