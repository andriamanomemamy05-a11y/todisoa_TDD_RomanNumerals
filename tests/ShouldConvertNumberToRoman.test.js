const { toRomanNumeral } = require('../src/toRomanNumeral');

test('convertit 1 en I', () => {
  expect(toRomanNumeral(1)).toBe('I');
});

test('convertit 2 en II', () => {
  expect(toRomanNumeral(2)).toBe('II');
});

test('convertit 3 en III', () => {
  expect(toRomanNumeral(3)).toBe('III');
});