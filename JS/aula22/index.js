/**
 * Opoeradores Lógicos:
    && -> AND -> E
    || -> OR -> OU
    ! -> NOT -> NÂO
 */

const expressaoAnd = true && true && true && false && true;
const expressaoOr = false || false || true || false;

console.log(); //todas as expressões precisam ser verdadeiras para retornar true

/*Exemple:
// const usuario = 'Lipas';
// const senha = '124897';
// const vaiLogar = usuario === 'Lipas' && senha === '124897';

// console.log(vaiLogar);
*/

// NOT:
console.log(true);
console.log(!true);
console.log(!!true);