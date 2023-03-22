const sumAll = function(num1, num2) {
    
    let sum = 0;
    // Check for negative numbers
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    // Check for non-number parameters
    else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    } else
    // Check for the smaller number
        if (num1 < num2) {
        // Add all numbers from num1 to num2
            for (let i = num1; i <= num2; i++) {
            sum += i;
        }
        } else {
        // Add all numbers from num2 to num1
            for (let i = num2; i <= num1; i++) {
            sum += i;
        }
        }
    // Return the sum
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
