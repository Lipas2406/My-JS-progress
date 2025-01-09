/*
Object.values
Object.entries
Object.assign(dev, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedade)
Object.defineProperty (define uma propriedade)
*/

/* // ...(spread)
const produto = { nome: 'Caneca', preco: 1.8};
const outraCoisa = { 
    ...produto, // ...(spread)
    material: 'porcelana' 
};

outraCoisa.nome = 'produto';
outraCoisa.preco = 25.50;
*/

/* //Object.assing()
const produto = { nome: 'Caneca', preco: 1.8};
const outraCoisa = Object.assign(
    {}, produto, { material: 'porcelana' }
);

outraCoisa.nome = 'produto';
outraCoisa.preco = 25.50;
*/

const produto = { nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'nomeAê'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

console.log(Object.values(produto));

console.log(Object.entries(produto));
for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}
