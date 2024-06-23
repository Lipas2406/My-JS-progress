/*
&& -> false && true = false "O valor mesmo"
|| -> false && true = true "o valor mesmo"
*/

/**FALSY: valores que retornam false
false
0 
'' "" ``
num/ undefined
NaN
 */

/*
console.log('Lipas' && true && 'Alfredo'); // -> se tudo for true ele vai retornar o último valor  
console.log('Lipas' && 0 && 'Alfredo');  // -> caso não haja valor true, ele vai retornar o o valor da expressao falsa  

function falaOi () {
    return 'Oi';

}

const vaiExecutar = 'Joaõzinho';

console.log(vaiExecutar && falaOi());
*/

/*
console.log(0 || false || null || 'Lipas' || true); 

let corUsuario = 'blue';
const corPadrao = corUsuario || 'red';
console.log(corPadrao);
*/

const a = 0;
const b = null;
const c = 'false'; //-> é uma string, logo tem um valor (false)
const d = false;
const e = NaN; //-> se aquela não fosse uma string, esse NaN seria retornado por ser o último

console.log (a || b || c || d || e);