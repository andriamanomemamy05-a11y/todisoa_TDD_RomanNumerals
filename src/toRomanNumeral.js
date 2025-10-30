function toRomanNumeral(n) {
  if (n === 1) return 'I';
  if (n === 2) return 'II';
  if (n === 3) return 'III';
  throw new Error('Not implemented');
}

module.exports = { toRomanNumeral };