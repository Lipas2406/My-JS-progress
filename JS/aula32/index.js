// let a = 'A';
// let b = 'B';
// let c = 'C';

// const numeros = [b, c, a];
// [a, b, c] = numeros;

// console.log (a, b, c);



/*
//               0  1  2  3  4  5  6  7  8  
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeiroNumero = numeros[0];
console.log(primeiroNumero);
*/

/*
// ... rest
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [um, , tres, , cinco, , sete, ...resto] = numeros;
console.log(um, tres, cinco);
*/

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros[1][1]);

const [,[,cinco,]] = numeros
console.log(cinco);

const [lista1, lista2, lista3] = numeros;
console.log(lista2[1])