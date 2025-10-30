function convert4And9ToRoman(n) {
    if (n <= 3 || n >= 4000) throw new RangeError('Out of range');

  const numerals = {
    4: 'IV',
    5: 'V',
    9: 'IX',
  };

  if (numerals[n]) return numerals[n];
  if (n < 9) return 'V' + 'I'.repeat(n - 5);

  throw new Error('Not implemented');
}

module.exports = { convert4And9ToRoman }; 