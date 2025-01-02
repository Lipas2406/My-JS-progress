/*
const pessoa = {
    nome: 'Lipas',
    sobrenome: 'Alfredo'
};
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
const chave = 'nome';
// console.log(pessoa['nome']);
// console.log(pessoa['sobrenome']);
// console.log(pessoa['sobrenome']);




const pessoa1 = new Object();
pessoa1.nome = 'Lipas';
pessoa1.sobrenome = 'Alfredo';
pessoa1.idade = 20;


// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log('Mesmíssima coisa!');

// delete pessoa1.nome;
// console.log(pessoa1);

pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`)
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

// console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(chave);
}
*/



// Factory functions / Constructor functions / Classes:

//Factory
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Lipas', 'Alfredo');
// console.log(p1.nomeCompleto);


// Constructor 
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// o que raios  a palavra 'new' faz nessa função?????
// {} <- this -> this 
const p2 = new Pessoa('Lipas', 'Alfredo');
console.log(p2);