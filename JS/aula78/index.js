const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    }
};

// const pessoaPrototype = { ...beber, ...falar, ...comer };
const pessoaPrototype = Object.assign({}, falar, comer,)

function criaPessoa (nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
    });
 }