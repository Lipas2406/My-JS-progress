const pessoas = [
    { id: 1, nome: 'Lipas' },
    { id: 3, nome: 'Bartolomeu' },
    { id: 2, nome: 'Alfredo' },
];

/*
const novasPessoas = {};

// for (const { id, nome } of pessoas) {
//     console.log(id, nome);
// };

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
}
*/

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id,  { ...pessoa });
}

console.log(novasPessoas);