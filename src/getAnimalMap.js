const data = require('../data/zoo_data');

// const findSpeciesWithLocation = (location) => {
//   const animals = [];
//   data.species.forEach((specie) => {
//     if (specie.location === location) {
//       animals.push(specie.name);
//     }
//   });

//   return animals;
// };

// const noParameter = () => ({
//   NE: findSpeciesWithLocation('NE'),
//   NW: findSpeciesWithLocation('NW'),
//   SE: findSpeciesWithLocation('SE'),
//   SW: findSpeciesWithLocation('SW'),
// });

// const findSpeciesAndNamesWithLocation = (location) => {
//   const animals = [];
//   data.species.forEach((specie) => {
//     if (specie.location === location) {
//       const arrayOfNames = [];
//       specie.residents.forEach((resident) => {
//         arrayOfNames.push(resident.name);
//       })
//       animals.push({specie[name]: arrayOfNames});
//     }
//   });

//   return animals;
// };

// const speciesAndNames = () => {
//   return {
//     NE: findSpeciesAndNamesWithLocation('NE'),
//     NW: findSpeciesAndNamesWithLocation('NW'),
//     SE: findSpeciesAndNamesWithLocation('SE'),
//     SW: findSpeciesAndNamesWithLocation('SW'),
//   }
// }

// const getAnimalMap = (options) => {
//   if (options === undefined || !Object.keys(options).includes('includeNames')) {
//     return noParameter();
//   }
//   if (Object.keys(options).includes('includeNames') && Object.keys(options).length === 1) {
//     return speciesAndNames();
//   }
//   return 1;
// };
const getAnimalMap = (options) => {

};
// console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
