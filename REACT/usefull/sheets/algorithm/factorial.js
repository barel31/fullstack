const factorial = n1 => {
    let sum = 1;
    for (let i = 1; i <= n1; i++) {
        sum *= i;
    }
    return sum;
};

console.log(factorial(5));