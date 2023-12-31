const data = require('../data/zoo_data');

const days = {
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: [],
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: [],
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: [],
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: [],
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: [],
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: [],
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const noParameter = (scheduleTarget) => {
  data.species.forEach((specie) => {
    specie.availability.forEach((day) => {
      days[day].exhibition.push(specie.name);
    });
  });
  if (scheduleTarget === undefined || !Object.keys(days).includes(scheduleTarget)) {
    return days;
  }
  const obj = {};
  obj[scheduleTarget] = days[scheduleTarget];
  return obj;
};

const clearArray = () => {
  const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  weekDays.forEach((weekDay) => {
    days[weekDay].exhibition.length = 0;
  });
};

const getSchedule = (scheduleTarget) => {
  clearArray();
  const animalSchedule = data.species.find((specie) => scheduleTarget === specie.name);
  if (animalSchedule !== undefined) {
    return animalSchedule.availability;
  }
  if (scheduleTarget === undefined || animalSchedule === undefined) {
    return noParameter(scheduleTarget);
  }
};

console.log(getSchedule());
console.log(getSchedule());
module.exports = getSchedule;
