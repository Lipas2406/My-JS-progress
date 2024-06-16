/**
 * Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valorres copiados
 
 * Referência (mutáveis) - array, object, function - Valores passados por referência
 */


/* *PRIMITIVO*
//          01234
let nome = 'Lipas';
nome[0] = 'T'; // -> não muda
console.log (nome[0]); // -> continua L


let a = 'A';
let b = a;
console.log(a, b);

a = 'Outra coisa'; // -> não afeta no valor de b
console.log(a, b); // -> b continua sendo 'A'
*/

/*//*REFERÊNCIA 1*
let a = [1, 2, 3];
let b = a; -> referenciou let a
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b); // -> o valor foi adicionado tanto no a quanto no b

b.pop();
console.log(a, b); // -> ou seja, eles apontem para o mesmo local na memória 

a.push('Lipas');
console.log(c); 
*/

//*REFERÊNCIA 2*
let a = [1, 2, 3];
let b = [...a]; // -> cópia de let a, tornando-os independentes
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b); // -> o valor foi adicionado tanto no a quanto no b

b.pop();
console.log(a, b); // -> ou seja, eles apontem para o mesmo local na memória 

a.push('Lipas');
console.log(a, c); 

// mesma coisa para objeto...

const x = {
    nome: 'Lipas',
    sobrenome: 'Alfredo'
};
const y = {...x};

x.nome = 'Cavalo';
console.log(x);
console.log(y);

