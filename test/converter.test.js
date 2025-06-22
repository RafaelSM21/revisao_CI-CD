const { converterPontos } = require('../src/converter.ts');

describe('Função converterPontos', () => {
  test('Converte valores positivos corretamente', () => {
    expect(converterPontos(50)).toBe(500);
    expect(converterPontos(100)).toBe(1000);
  });

  test('Retorna 0 para input 0', () => {
    expect(converterPontos(0)).toBe(0);
  });

  test('Lança erro para valores negativos', () => {
    expect(() => converterPontos(-5)).toThrow('Pontos não podem ser negativos');
  });
});
