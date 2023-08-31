const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const employeeInfos = data.employees;

  employeeInfos.find((empl) => empl.firstName === employeeName || empl.lastName === employeeName);

  if (employeeInfos === undefined) {
    return {};
  }
  return employeeInfos;
};
// console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
