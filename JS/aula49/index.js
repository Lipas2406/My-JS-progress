// *return
// - Retorna um valor
// - Termina a função

/*
function soma1(a, b) {
    return a + b;
}
console.log(soma1(5, 2));

function soma2(a, b) {
    console.log(a + b);
}
soma2(2, 5);
*/
/*
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Lipas', 'Alfredo');
const p2 = {
    nome: 'Lipas',
    sobrenome: 'Alfredo'
};

console.log(p1, typeof p1);
console.log(p2, typeof p2);
*/
/*
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const tudo = fala('mundo!');

console.log(tudo); // ?????
*/

function criaMultiplicador(multiplicador) {
    // esse é o multiplicador 
    return function multiplicacao(n) {
        return n * multiplicador; 
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);


console.log(triplica(6));
