// *Não podemos criar constantes com palavras reservadas
// *Constantes precisam ter nomes significativos
// *Não pode começar o nome de uma Constantes com um número
// *Não podem conter espaços ou traços 
// *Utilizamos camelCase
// *Case-sensitive 
// *Não podemos modificar o valor de uma constante
// *NÃO UTILIZE VAR, UTILIZE LET!

const nome = 'Lipas';
console.log ('Olá! Meu nome é', nome)

const primeiroNumero = 5; //Number -> fora de aspas
const segundoNumero = 10;
const resultado = primeiroNumero + segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log (resultadoTriplicado) //perdeu o primeiro valor (valor inicial/orginal)
console.log (primeiroNumero) //mantém o valor


/*Type de código | operações:*/
const PrimeiroNumero = '5'; //String -> dentro de aspas

console.log (typeof primeiroNumero) //relava o type do código caso não esteja explícito 
console.log (typeof PrimeiroNumero)
console.log (PrimeiroNumero + segundoNumero) //concatenou os dados 

console.log (typeof (PrimeiroNumero + segundoNumero));