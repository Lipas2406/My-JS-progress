/*
function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}

// saudacao('Lipas'); 
// saudacao('Alfredo'); 
// saudacao('Bartolomeu'); 

const variavel = saudacao('Lipas');
console.log(variavel);
*/

/*
function soma(x, y) { // -> conteúdo protegido e inacecível.
    const resultado = x + y;
    return resultado; // -> encerra a leitura: não lê mais nada posterior.
}

// console.log(soma(2, 1));
// console.log(soma(4, 7));
// console.log(soma(59, 26));

//console.log(resultado); // -> não acessa os valores da função, logo, não há nenhuma const definida.

const resultado = soma(4, 4); // -> não interfere nem é interefrido pela função.
console.log (resultado);



function soma1(a = 1, b = 1) { // -> pré atribuição; os valores são substituídos quando atribuídos na chamada.
    const resultado = a + b;
    return resultado;
}

const resultado1 = soma1();// -> caso os valores não sejam atribuídos, eles consideraram os valores pré atribuído (a=1, b=1); se nada foi pre atribuído nem na chamada, retornará NaN.
console.log(resultado1);
*/


// const raiz = function (n) {
//  return n ** 0.5;
// };

const raiz = n => n ** 0.5; // -> ARROW FUNCTION, forma simplificada


console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));