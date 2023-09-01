const data = require('../data/zoo_data');

const isManager = (id) => {
  let trueOrFalse = false;
  data.employees.forEach((employee) => {
    employee.managers.forEach((manager) => {
      if (manager === id) {
        trueOrFalse = true;
      }
    });
  });

  return trueOrFalse;
};

const getRelatedEmployees = (managerId) => {
  try {
    if (!isManager(managerId)) {
      throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    }
    const cooperatorsArray = [];
    data.employees.forEach((employee) => {
      employee.managers.forEach((manager) => {
        if (manager === managerId) {
          cooperatorsArray.push(`${employee.firstName} ${employee.lastName}`);
        }
      });
    });
    return cooperatorsArray;
  } catch (error) {
    return error.message;
  }
};

console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
module.exports = { isManager, getRelatedEmployees };
