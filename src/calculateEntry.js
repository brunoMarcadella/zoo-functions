const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      adult += 1;
    } else if (entrant.age >= 50) {
      senior += 1;
    }
  });

  return {
    child,
    adult,
    senior,
  };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || entrants.length === 0) {
    return 0;
  }
  const arrayOfEntrants = Object.values(countEntrants(entrants));
  let sum = 0;
  sum += arrayOfEntrants[0] * data.prices.child;
  sum += arrayOfEntrants[1] * data.prices.adult;
  sum += arrayOfEntrants[2] * data.prices.senior;

  return Number(sum.toFixed(2));
};

// console.log(countEntrants([
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ]));

// console.log(calculateEntry([
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ]));

module.exports = { calculateEntry, countEntrants };
