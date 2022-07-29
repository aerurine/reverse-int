module.exports = function reverse (n) {
    const arr = [];
    arr.push(n);
    const result = String(arr).split('').reverse().join('');
    return Math.abs(parseInt(result));
}
