
const verdadeira = true;

// let tem escopo de bloco ( ... bloco)
// var só tem escopo de função  


/*
let nome = 'Lipas'; // criando
var nome2 = 'Lipas2';

if (verdadeira) {
    let nome = 'Alfredo'; // criando outra variável
    console.log (nome, nome2);

    if (verdadeira) {
        let nome = 'Outro'
        console.log (nome, nome2);
    }
}
*/


/*
let nome = 'Lipas'; // criando
var nome2 = 'Lipas2';

var nome2 = 'Alfredo'; // redeclarando

if (verdadeira) {
    let nome = 'Alfredo'; // criando outra variável
    var nome2 = 'Bartolomeu' // redeclarando


    if (verdadeira) {
        let nome = 'Outro' // criando outra variável
        var nome2 = 'Glossário' // redeclarando
    }
}
 console.log(nome, nome2);
 */
var sobrenome = 'Bartolomeu'

 function fala () {

    if (verdadeira) {
        var nome = 'Lipas'
        let nome2 = 'Alfredo'
        console.log(nome, sobrenome, nome2); // -> consegue acessar var de fora da função
    }
    console.log(nome, sobrenome, nome2)// -> var não respeita o escopo, mas let respeita
 }

//  console.log(nome); // -> não consegue acessar var de dentro da função


 fala();