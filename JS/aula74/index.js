// Produto
// Camiseta , caneca, lápis

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco += quantia;
};



function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this. preco = this.preco + (this.preco * (percentual / 100));
};



function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        get: function(){
            return estoque;
        }, 
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        } 
    })
}
Caneca.prototype.aumento = function(percentual) {
    this. preco = this.preco + (this.preco * (percentual / 100));
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.aumento(100);


const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Vermelha');
const caneca = new Caneca('Melhor mãe do mundo', 50, 'Porcelana', 2);
// camiseta.aumento(10);  
console.log(caneca);
console.log(camiseta);
console.log(produto);