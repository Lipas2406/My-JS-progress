// Funções Construtoras (Constructor functions) -> cria objetos
// Sempre inicia com letra maiúscula -> Pessoa (new)

function Pessoa (nome, sobrenome) {
    // Atributos ou métodos privados:
    const ID = 123456;
    const metodonterno = function () {

    };

    // Atributos ou métodos públicos:
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': sou um método.')
    }
}

const p1 = new Pessoa('Lipas', 'Alfredo');
const p2 = new Pessoa('Bartolomeu', 'Afonso');

p1.metodo();