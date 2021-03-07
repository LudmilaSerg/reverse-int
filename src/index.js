
module.exports = function reverse(n) {
    let res;
    if (n < 0) {
        n = n * (-1);
        res = n.toString().split('').reverse().join('')
    } else {
        res = n.toString().split('').reverse().join('');
    }
    return res;
}


