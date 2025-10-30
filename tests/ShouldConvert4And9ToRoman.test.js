const { convertToRomanNumeral } = require('../src/convertToRomanNumeral');

test('convertit 4 en IV', () => {
  expect(convertToRomanNumeral(4)).toBe('IV');
});

test('convertit 9 en IX', () => {
  expect(convertToRomanNumeral(9)).toBe('IX');
});