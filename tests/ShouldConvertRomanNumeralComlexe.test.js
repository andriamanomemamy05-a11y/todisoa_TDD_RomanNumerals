const { convertToRomanNumeral } = require('../src/convertToRomanNumeral');

test('convertit 58 en LVIII', () => {
  expect(convertToRomanNumeral(58)).toBe('LVIII');
});

test('convertit 1994 en MCMXCIV', () => {
  expect(convertToRomanNumeral(1994)).toBe('MCMXCIV');
});

test('convertit 3999 en MMMCMXCIX', () => {
  expect(convertToRomanNumeral(3999)).toBe('MMMCMXCIX');
});