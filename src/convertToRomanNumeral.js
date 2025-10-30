function convertToRomanNumeral(n) {
    // Ajout et vérification des éxceptions pour les entrées invalides
    // Vérifier que l'entrée est un nombre
    if (typeof n !== 'number') {
    throw new TypeError('Input must be a number');
    }

    // Vérifier que l'entrée est un entier
    if (!Number.isInteger(n)) {
    throw new TypeError('Input must be an integer');
    }

    // Vérifier que l'entrée est dans la plage valide (1-3)
    if (n <= 0 || n >= 4) {
    throw new RangeError('Number must be between 1 and 3');
    }

    // Conversion basique pour les nombres 1 à 3 en I, II, III
    return 'I'.repeat(n);
}

module.exports = { convertToRomanNumeral };