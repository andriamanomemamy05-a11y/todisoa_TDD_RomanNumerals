function convertToRomanNumeral(n) {
    // Vérifie que le nombre est dans la plage 1–3999
    if (n <= 0 || n >= 4000) throw new RangeError('Out of range');

    // Table de correspondance pour les cas simples (unités)
    const numerals = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
    };

    // Test si le nombre correspond directement à une clé du dictionnaire
    if (numerals[n]) return numerals[n];

    // Test si le nombre est entre 2 et 3 → répète 'I'
    if (n < 4) return 'I'.repeat(n);

     // Test si le nombre est entre 6 et 8 → 'V' suivi de 'I' répété
    if (n < 9) return 'V' + 'I'.repeat(n - 5);

    // Sinon , on affiche erreur pour les autres cas non gérés
    throw new Error('Not implemented');
}

module.exports = { convertToRomanNumeral };
