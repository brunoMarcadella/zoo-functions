const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Se a função está definida', () => {
    expect(getOpeningHours).toBeDefined();
  });
  it('Se é uma função', () => {
    expect(typeof getOpeningHours).toEqual('function');
  });
  it('Se ao receber nenhum argumento a função retorna o objeto esperado', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Se ao receber os argumentos "Monday" e "09:00-AM" retorna a string "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Se ao receber os argumentos "Tuesday" e "09:00-AM" retorna a string "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Se ao receber os argumentos "Wednesday" e "09:00-PM" retorna a string "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Se ao receber os argumentos "Thu" e "09:00-AM" lança a mensagem "The day must be valid. Example: Monday"', () => {
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('Se ao receber os argumentos "Friday" e "09:00-ZM" lança a mensagem "The abbreviation must be AM or PM"', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Se ao receber os argumentos "Saturday" e "C9:00-AM" lança a mensagem "The hour should represent a number"', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow(new Error('The hour should represent a number'));
  });
  it('Se ao receber os argumentos "Sunday" e "09:c0-AM" lança a mensagem "The minutes should represent a number"', () => {
    expect(() => { getOpeningHours('Sunday', '09:c0-AM'); }).toThrow(new Error('The minutes should represent a number'));
  });
});
