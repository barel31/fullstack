const plus = (x, y) => {
    if (typeof x != 'number' || typeof y != 'number') {
        throw 'NAN';
    }
    return x + y;
};

const minus = (x, y) => {
    if (typeof x != 'number' || typeof y != 'number') {
        throw 'NAN';
    }
    return x - y;
};

const factorial = (x) => {
    if (typeof x != 'number') {
        throw 'NAN';
    }
    let y = 1;
    for (let i = 2; i <= x; i++) {
        y *= i;
    }
    return y;
};

const multi = (x, y) => {
    if (typeof x != 'number' || typeof y != 'number') {
        throw 'NAN';
    }
    return x * y;
};

const divide = (x, y) => {
    if (typeof x != 'number' || typeof y != 'number') {
        throw 'NAN';
    }
    if (!y) {
        throw "can't divide by zero";
    }
    return x / y;
};

const pow = (x, y) => {
    if (typeof x != 'number' || typeof y != 'number') {
        throw 'NAN';
    }
    if (y === 0) {
        return 1;
    }
    let multi = x;
    for (let i = 2; i <= y; i++) {
        x *= multi;
    }
    return x;
};

module.exports = {
    plus: plus,
    minus: minus,
    factorial: factorial,
    multi: multi,
    pow: pow,
    divide: divide,
};
