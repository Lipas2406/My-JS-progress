const pessoa = {
    nome: 'Lipas',
    sobrenome: 'Alfredo',
    idade: '6',
    endereco: {
        rua: 'Jd Piratininga',
        numero: 7
    }
};

// Atribuição via desstruturação:
// const { nome = 'Não existe', sobrenome, idade, endereco: {rua, numero} } = pessoa;
// console.log(rua, numero);


const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);
 