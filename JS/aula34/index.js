// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');


//       i = index
/*
for (let i = 400; i >= 300; i -= 3) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}
*/

const numbers = Array.from({ length: 101 }, (_, i) => i);


const fizz = (number) => Number.isInteger(number / 3) ? 'Fizz' : number;
const buzz = (number) => Number.isInteger(number / 5) ? 'Buzz' : number;
const fizzBuzz = (number) => Number.isInteger(number / 3) && Number.isInteger(number / 5) ? 'FizzBuzz' : number;


function checkNumber(number) {
    if (typeof(number) !== 'number') return 'NaN';
    if (fizzBuzz(number) === 'FizzBuzz') {
        return 'FizzBuzz';
    } else if (fizz(number) === 'Fizz') {
        return 'Fizz';
    } else if (buzz(number) === 'Buzz') {
        return 'Buzz';
    } else return number;
}



numbers.forEach((number) => {
    console.log(number, '->', checkNumber(number));
});

//Preguiça de colocar lá....