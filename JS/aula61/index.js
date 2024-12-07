const nomes = ['Lipas', 'Alfredo', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, deletar, elem', elem2, elem3);

// const removidos = nomes.splice(4, 1);
// const removidos = nomes.splice(-2, 1);
const removidos = nomes.splice(3, 0, 'Luiz', 'Gustavo');
console.log(nomes, removidos);
console.log('...');

//oush
const removidospush = nomes.splice(nomes.length, 0, 'Bartolomeu');
console.log(nomes, removidospush);
console.log('...');

//pop
const removidospop = nomes.splice(-1, 1);
console.log(nomes, removidospop);
console.log('...');

//shift
const removidosshift = nomes.splice(0, 1);
console.log(nomes, removidosshift);
console.log('...');

//unshift
const adicionadosunshift = nomes.splice(0, 0, 'Thiago');
console.log(nomes, adicionadosunshift);
console.log('...');