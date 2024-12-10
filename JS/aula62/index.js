const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'Lipas');
// ... rest -> spread
console.log('Método 1:',  a3);

const a4 = [...a1, ...a2, 'Lipas', ...[7, 8, 9]];
console.log('Método 2:', a4);