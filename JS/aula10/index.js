/**  Aritméticos:
 * + Adição e Concatenação
 * - / * 
 * ** Potenciação
 * % Resto da divisão
*/

let num1 = '5';
let num2 = 10;
console.log (num1 + num2); //Concatenação

num1 = 10;
num2 = 5;
console.log (num1 + num2); //Adição
console.log (num1 - num2);
console.log (num1 * num2);
console.log (num1 / num2);
console.log (num1 ** num2);
console.log (num1 % num2);

num1 = 5;
num2 = 2;
num3 = 10;

console.log ((num1 + num3) * num2 / num1);

/*
 //Prescedência:
 
 * ()
 * **
 * * / %
 * + -
*/


let contador = 1;
contador++; // 2
contador++; // 3
++contador; // 4 
++contador; // 5
contador--; // 4
--contador; // 3
console.log (contador);

console.log (++contador);
console.log (contador++);
console.log (contador--);
console.log (--contador);

/*
Incremento: +
Decremento: -
*/ 


/*Operadores de atribuição*/
const passo = 2;
let contador1 = 2;

/*contador1 = contador1 + passo;
console.log (contador1);
contador1 = contador1 + passo;
console.log (contador1);
contador1 = contador1 + passo;
console.log (contador1);*/

contador1 *= passo;
contador1 *= passo;
contador1 *= passo;

console.log (contador1);


//NaN -> Not a Number

const num1a = 10;
const num2a = 'Lipas';
console.log (num1a * num2a);

const num3a = 10;
const num4a = '5';
console.log (num3a * num4a);

// 'parseInt' (inteiro), 'parseFloat' (decimal), 'Number' (número)

const num1b = 10;
const num2b = Number('5.8');
console.log (num1b * num2b);