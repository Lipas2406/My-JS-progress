// classes = função construtora

// Class
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} está falando`);
    }
}


// Construcor Function
function Pessoa2 (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando`);
}


const p1 = new Pessoa('Lipas', 'Alfredo');
const p2 = new Pessoa2('Bartolomeu', 'Vizzoline');
console.log(p1.falar());
console.log(p2.falar());