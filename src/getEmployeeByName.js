const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const emplData = data.employees;

  const employeeInfos = emplData.find((employee) => {
    const employeeFirstName = employee.firstName;
    const employeeLastName = employee.lastName;

    if (employeeFirstName === employeeName || employeeLastName === employeeName) {
      return employee;
    }
  });

  if (employeeInfos === undefined) {
    return {};
  }
  return employeeInfos;
};
console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
