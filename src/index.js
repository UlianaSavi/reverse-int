module.exports = function reverse (n) {
    return Math.abs(`${Math.abs(n)}`.split('').reverse().join(''));
}
