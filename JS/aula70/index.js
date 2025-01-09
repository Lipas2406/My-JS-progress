// defineProperty
function Produto(nome, preco, estoque) {
    this.nome = nome; 
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
       enumerable: true, // vizualização da chave
       configurable: true,
       get: function() {
        return estoquePrivado;
       },
       set: function (valor) {
        if (typeof valor !== 'number') {
            throw new TypeError ('Mensagem');         
        }

        estoquePrivado = valor;
       }
    });
}

function criaProduto (nome) {
    return{
        
    get nome() {
        return nome;
    },
    set nome(valor) {
        valor = valor.replace('isso', 'aquilo');
        nome = valor;
    }
    
    }
}

// const p1 = new Produto('Camiseta', 20, 3);

// // console.log(p1); // depende do enumerable
// p1.estoque = 400;
// console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'Absolutamente isso';
console.log(p2.nome);
