module.exports = function reverse (n) {

    const number = n < 0 ? -1 : 1;


    let NumToStr = Math.abs(n).toString(n).split('').reverse().join('');


    return  number * parseInt(NumToStr, 10);



}
