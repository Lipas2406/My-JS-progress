// Valor por referência 
const nomes = ['Eduardo', 'Maria', 'João'];
nomes[2] = 'Joana';

nomes.push('Lipas');
nomes.unshift('Alfredo');

const novo1 = [...nomes];
const novo2 = nomes.slice(1, -1);

// novo.pop(); 
delete nomes [2];
console.log(nomes, novo2); 