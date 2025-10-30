function convertToRomanNumeral(n) {
    
    // Vérifie que le nombre est dans la plage 1–3999
    if (n <= 0 || n >= 4000) throw new RangeError('Out of range');

    const map = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' },
    ];

    let result = '';

    // Parcours de la table pour construire le chiffre romain attendu
    for (const { value, numeral } of map) {
        // Tant que le nombre restant est supérieur ou égal à la valeur,
        // on ajoute le symbole correspondant et on soustrait la valeur.
        while (n >= value) {
            result += numeral;
            n -= value;
        }
    }
    return result;
}

module.exports = { convertToRomanNumeral };
