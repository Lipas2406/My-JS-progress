/* 
* Operadores de comparação:

>
>=
<
<=
== igualdade (valor)
=== igualdade estrita (valor e tipo) ******
!= diferente (valor) ******
!== deiretente estrito (valor e tipo) ******
*/


// somente numbers:
function comp(x, y) {

    let expressao = x ^ y;
    // (escolha uma das comparações):
    expressao = x > y;

    return expressao
}



console.log(comp(10, 9));
console.log(comp(10, 10));
console.log(comp(10, 11));


// em caso de strings:
const num1 = 10;
const num2 = '10';

// (igualdades)
comp = num1 == num2; // vizualiza deduzindo que tudo deve ser number
console.log(comp);
comp = num1 === num2; // vizualiza na íntegra, considerando tanto o valor quanto o tipo
console.log(comp);

// (diferenças)
comp = num1 != num2; // vizualiza deduzindo que tudo deve ser number
console.log(comp);
comp = num1 !== num2; // vizualiza na íntegra, considerando tanto o valor quanto o tipo
console.log(comp);
