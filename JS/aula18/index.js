/*
const nome01 = 'Lipas';
const sobrenome01 = 'Alfredo';
const idade01 = 17;

const nome02 = 'Bartolomeu';
const sobrenome02 = "D'Alcântara";
const idade02 = 52;
*/ // -> :{



/* // -> Forma estruturada:
const pessoa1 = {
    nome: 'Lipas',
    sobrenome: 'Alfredo',
    idade: 17
};

const pessoa2 = {
    nome: 'Bartolomeu',
    sobrenome: "D'Alcântara",
    idade: 17
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
*/



/* // -> Forma em function:
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Lipas', 'Alfredo', 17);
const pessoa2 = criaPessoa('Bartolomeu', "D'Alcântara", 55);
const pessoa3 = criaPessoa('Joana', "Juscenbherg", 9);
const pessoa4 = criaPessoa('Gustavo', "Rufino", 78);
const pessoa5 = criaPessoa('Kakaroe', "Tonomiro", 20);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
*/

const pessoa1 = {
    nome: 'Lipas',
    sobrenome: 'Alfredo',
    idade: 17,

    fala() {
        // console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`Sua idade é de ${this.idade} anos.`);
    },

    incrementaIdade() {
        this.idade++
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();