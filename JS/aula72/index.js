// Contrutura -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
//  this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
} 

// instância
const pessoa1 = new Pessoa('Lipas', 'A.'); // <- Pessoa = Função cconstrutora
const pessoa2 = new Pessoa('Bart', 'R.'); // <- Pessoa = Função cconstrutora
const data = new Date(); // <- Pessoa = Função cconstrutora

console.dir(pessoa1); 
console.dir(pessoa2); 
console.dir(data);