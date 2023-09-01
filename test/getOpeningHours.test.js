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
});
