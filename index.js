// Dados primitivos: string, number, undefined, null, boolean

const nome = 'Lipas'; //string
const nome1 = "Lipas"; //string
const nome2 = `Lipas`; //string
const num = 10; //number
const num1 =10.52; //number
let nomeAluno; //undefined -> não aponta pra local nenhum na memória
const sobrenomeAluno = null; // nulo -> não aponta pra local nenhum na memória
const aprovado = false; // boolean = true, false (lógico)

console.log (typeof nome, nome);
console.log (typeof nome1, nome1);
console.log (typeof nome2, nome2);
console.log (typeof num, num);
console.log (typeof num1, num1);
console.log (typeof nomeAluno, nomeAluno);
console.log (typeof sobrenomeAluno, sobrenomeAluno);
console.log (typeof aprovado, aprovado);

let a = 2;
const b = a;
console.log (a, b) // 2, 2

a = 3;
console.log (a, b) // 3, 2

