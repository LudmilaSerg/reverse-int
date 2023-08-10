module.exports = function reverse (n) {


    let NumToStr = Math.abs(n).toString().split('').reverse().join('');

    return parseInt(NumToStr, 10) ;



}
