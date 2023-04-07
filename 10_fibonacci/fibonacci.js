const fibonacci = function(num, memo = {}) {
    // validate input
    if (num < 0) return "OOPS"
    // convert string to number
    num = Number(num)    
    // fibonacci with memoization for optimization
    if (num in memo) return memo[num]
    if (num <= 2) return 1
    memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
    return memo[num]
};

// Do not edit below this line
module.exports = fibonacci;
