function isAlphanumeric(char) {
    return /^[a-z0-9]$/i.test(char);
}

const palindromes = function (str) {
    let strcpy = str.split('').filter(a => isAlphanumeric(a)).join('').toUpperCase();
    let reversed = strcpy.split('').reverse().join('');
    return reversed === strcpy;
};

// Do not edit below this line
module.exports = palindromes;
