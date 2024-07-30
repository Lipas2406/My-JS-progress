
// Declaração de função (Função hoisting)
falaOi();
function falaOi () {
    console.log('Oi!');
};

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado.')
};


function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);



// Arrow funticion
const funcaoArrow = () => {
    console.log('Sou uma arrow function.')
};
funcaoArrow();


// Dentro de um objeto
const obj = {
    falar: function () {
        console.log('Estou falando.... (se é que isso é "falar")');
    },
    falei() {
        console.log('Já falei (ainda não sei se isso é "falar").')
    }
 };

obj.falar();
obj.falei();