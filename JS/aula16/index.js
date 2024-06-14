//Arrays = 'lista de coisas'


// -> também indexad, mas por ítem
//               0       1        2
let alunos = ['Luiz', 'Maria', 'João']; 
alunos = 123;

console.log(typeof  alunos);
console.log(alunos instanceof Array);




// *Seleciona indexados*
// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);

// *Altera dados das lista*
// alunos[0] = 'Eduardo';

// *1ª Primeira forma de adicionar itens NO FIM do array*
// alunos[alunos.length] = 'Lipas';
// alunos[alunos.length] = 'Bartolomeu';
// alunos[alunos.length] = 'Alfredo';

// *2ª Segunda forma de adicionar itens NO FIM do array*
// alunos.push('Lipas');
// alunos.push('Alfredo');

// *1ª Primeira forma de adicionar itens NO INÍCIO do array*
// alunos.unshift('Lipas');
// alunos.unshift('Alfredo');

// *Remove do FIM do array*
// const alunos = ['Luiz', 'Maria', 'João']; 
// const removido = alunos.pop();
// console.log(removido);

// *Remove do INícIO do array*
// const alunos = ['Luiz', 'Maria', 'João']; 
// const removido = alunos.shift();
// console.log(removido);

// *Deleta qualquer elemento do array*
// delete alunos[1];
// console.log(alunos);
// console.log(alunos[1]);

// *Serara/fatia o array*
// alunos.push('Lipas');
// alunos.push('Alfredo');
// console.log(alunos.slice(0, 3)); // -> último valor não conta
// console.log(alunos.slice(0, -2));