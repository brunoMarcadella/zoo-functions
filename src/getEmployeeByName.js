const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const employeeData = data.employees;

  const employeeInfos = employeeData.find((employee) => {
    const employeeFirstName = employee.firstName;
    const employeeLastName = employee.lastName;

    if (employeeFirstName === employeeName || employeeLastName === employeeName) {
      return employee;
    }
    return undefined;
  });

  if (employeeInfos === undefined) {
    return {};
  }

  return employeeInfos;
};
// console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
