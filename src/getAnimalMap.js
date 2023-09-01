const data = require('../data/zoo_data');

const findSpeciesWithLocation = (location) => {
  const animals = [];
  data.species.forEach((specie) => {
    if (specie.location === location) {
      animals.push(specie.name);
    }
  });

  return animals;
};

const noParameter = () => ({
  NE: findSpeciesWithLocation('NE'),
  NW: findSpeciesWithLocation('NW'),
  SE: findSpeciesWithLocation('SE'),
  SW: findSpeciesWithLocation('SW'),
});

const findSpeciesAndNamesWithLocation = (location) => {
  const animals = [];
  data.species.forEach((specie) => {
    if (specie.location === location) {
      const arrayOfNames = [];
      specie.residents.forEach((resident) => {
        arrayOfNames.push(resident.name);
      });
      const obj = {};
      obj[specie.name] = arrayOfNames;
      animals.push(obj);
    }
  });

  return animals;
};
const findSortedSpeciesAndNamesWithLocation = (location) => {
  const animals = [];
  data.species.forEach((specie) => {
    if (specie.location === location) {
      const arrayOfNames = [];
      specie.residents.forEach((resident) => {
        arrayOfNames.push(resident.name);
      });
      arrayOfNames.sort();
      const obj = {};
      obj[specie.name] = arrayOfNames;
      animals.push(obj);
    }
  });

  return animals;
};

const arraySort = (array, options) => {
  if (options.sorted !== undefined) {
    return array.sort();
  }
  return array;
};

const findSexSpeciesAndNamesWithLocation = (location, sex, options) => {
  const animals = [];
  data.species.forEach((specie) => {
    if (specie.location === location) {
      const arrayOfNames = [];
      specie.residents.forEach((resident) => {
        if (resident.sex === sex) {
          arrayOfNames.push(resident.name);
        }
      });
      const newArrayOfNames = arraySort(arrayOfNames, options);
      const obj = {};
      obj[specie.name] = newArrayOfNames;
      animals.push(obj);
    }
  });

  return animals;
};

const sortedWithoutSex = () => ({
  NE: findSortedSpeciesAndNamesWithLocation('NE'),
  NW: findSortedSpeciesAndNamesWithLocation('NW'),
  SE: findSortedSpeciesAndNamesWithLocation('SE'),
  SW: findSortedSpeciesAndNamesWithLocation('SW'),
});

const animalsBySex = (sex, options) => ({
  NE: findSexSpeciesAndNamesWithLocation('NE', sex, options),
  NW: findSexSpeciesAndNamesWithLocation('NW', sex, options),
  SE: findSexSpeciesAndNamesWithLocation('SE', sex, options),
  SW: findSexSpeciesAndNamesWithLocation('SW', sex, options),
});

const speciesAndNames = (options) => {
  if (Object.keys(options).includes('sorted') && !Object.keys(options).includes('sex')) {
    return sortedWithoutSex();
  }
  if (Object.keys(options).includes('sex')) {
    return animalsBySex(options.sex, options);
  }
  return {
    NE: findSpeciesAndNamesWithLocation('NE'),
    NW: findSpeciesAndNamesWithLocation('NW'),
    SE: findSpeciesAndNamesWithLocation('SE'),
    SW: findSpeciesAndNamesWithLocation('SW'),
  };
};

const getAnimalMap = (options) => {
  if (options === undefined || !Object.keys(options).includes('includeNames')) {
    return noParameter();
  }
  if (Object.keys(options).includes('includeNames')) {
    return speciesAndNames(options);
  }
};

// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
module.exports = getAnimalMap;
