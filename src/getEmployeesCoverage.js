const data = require('../data/zoo_data');

const nameAsObject = (obj) => {
  let person = data.employees.find((employee) => employee.firstName === obj.name);
  if (person === undefined) {
    person = data.employees.find((employee) => employee.lastName === obj.name);
  }
  if (person === undefined) {
    return undefined;
  }
  return person;
};

const idAsObject = (obj) => {
  const person = data.employees.find((employee) => employee.id === obj.id);
  if (person === undefined) {
    return undefined;
  }

  return person;
};

const turnSpeciesIdsInSpeciesNames = (ids) => {
  const arrayOfSpeciesNames = [];
  ids.forEach((id) => {
    const animal = data.species.find((specie) => specie.id === id);
    arrayOfSpeciesNames.push(animal.name);
  });
  return arrayOfSpeciesNames;
};

const findLocation = (person) => {
  const arrayOfLocations = [];
  person.responsibleFor.forEach((animal) => {
    const foundAnimal = data.species.find((specie) => specie.id === animal);
    arrayOfLocations.push(foundAnimal.location);
  });
  return arrayOfLocations;
};

const noParameter = () => {
  const allEmployees = [];
  data.employees.forEach((employee) => {
    allEmployees.push({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: turnSpeciesIdsInSpeciesNames(employee.responsibleFor),
      locations: findLocation(employee),
    });
  });
  return allEmployees;
};

const getEmployeesCoverage = (obj) => {
  if (obj === undefined) {
    return noParameter();
  }
  let person;
  if (Object.keys(obj)[0] === 'name') {
    person = nameAsObject(obj);
  } else if (Object.keys(obj)[0] === 'id') {
    person = idAsObject(obj);
  }
  if (person === undefined) {
    throw new Error('Informações inválidas');
  }
  return {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: turnSpeciesIdsInSpeciesNames(person.responsibleFor),
    locations: findLocation(person),
  };
};

// console.log(getEmployeesCoverage({ name: 'Sharondao' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
// console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
