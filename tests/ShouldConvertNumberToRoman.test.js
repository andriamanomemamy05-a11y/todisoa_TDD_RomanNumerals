const { convertToRomanNumeral } = require('../src/convertToRomanNumeral');

test('convertit 1 en I', () => {
  expect(convertToRomanNumeral(1)).toBe('I');
});

test('convertit 2 en II', () => {
  expect(convertToRomanNumeral(2)).toBe('II');
});

test('convertit 3 en III', () => {
  expect(convertToRomanNumeral(3)).toBe('III');
});