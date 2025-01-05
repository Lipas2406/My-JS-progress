// defineProperty - defineProperties

/* // defineProperty
function Produto(nome, preco, estoque) {
    this.nome = nome; 
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
       enumerable: true, // vizualização da chave
       value: 3, // valor
       writable: true, // alterável
       configurable: false // configurável
    });
}

const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 15780
// delete p1.estoque; 
// console.log(p1);
console.log(Object.keys(p1)); // depende do enumerable

for (let chave in p1) {
    console.log(chave);
};
*/


// defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
       enumerable: true, // vizualização da chave
       value: 3, // valor
       writable: true, // alterável
       configurable: false // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // vizualização da chave
            value: nome, // valor
            writable: true, // alterável
            configurable: false // configurável
        },
        preco: {
            enumerable: true, // vizualização da chave
            value: preco, // valor
            writable: true, // alterável
            configurable: false // configurável
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1); // depende do enumerable

for (let chave in p1) {
    console.log(chave);
};