var countBits = function (n) {
    let count = 0;
    while (n) {
        ++count;
        n = (n - 1) & n;
    }
    return count;
};