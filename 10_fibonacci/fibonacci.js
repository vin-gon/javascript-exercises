const fibonacci = function(num) {
    let a = 1;
    let b = 1;
    let res = 0;
    if (num < 0) { return "OOPS"; }
    if (num == 0) { return 0; }
    if (num == 1 || num == 2) { return 1; }
    for (let i = 2; i < num; ++i)
    {
        res = a + b;
        a = b;
        b = res;
    }

    return res;
};

// Do not edit below this line
module.exports = fibonacci;
