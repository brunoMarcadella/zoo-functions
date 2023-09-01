const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Se a função está definida', () => {
    expect(handlerElephants).toBeDefined();
  });
  it('Se é uma função', () => {
    expect(typeof handlerElephants).toEqual('function');
  });
  it('Se o argumento count retorna o valor 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Se o argumento names retorna um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Se o argumento averageAge retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Se o argumento location retorna a string W', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Se o argumento popularity retorna um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('Se o argumento availability retorna um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('Se não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});
