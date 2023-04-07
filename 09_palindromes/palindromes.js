const palindromes = function (arr) {
    // check if the argument is a string
    if (typeof arr !== 'string') {
        return false;
    }
    // remove all non-alphanumeric characters
    let str = arr.replace(/[^a-zA-Z0-9]/g, '');
    // convert the string to lowercase
    str = str.toLowerCase();
    // reverse the string
    let reverseStr = str.split('').reverse().join('');
    // check if the string is a palindrome
    if (str === reverseStr) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
