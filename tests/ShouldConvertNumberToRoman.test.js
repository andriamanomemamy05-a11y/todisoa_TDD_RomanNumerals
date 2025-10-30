const { toRoman } = require('../src/roman');

test('convertit 1 en I', () => {
  expect(toRoman(1)).toBe('I');
});

test('convertit 2 en II', () => {
  expect(toRoman(2)).toBe('II');
});

test('convertit 3 en III', () => {
  expect(toRoman(3)).toBe('III');
});