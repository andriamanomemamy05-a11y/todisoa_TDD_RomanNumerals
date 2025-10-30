const { convert4And9ToRoman } = require('../src/convert4And9ToRoman');

test('convertit 4 en IV', () => {
  expect(convert4And9ToRoman(4)).toBe('IV');
});

test('convertit 9 en IX', () => {
  expect(convert4And9ToRoman(9)).toBe('IX');
});