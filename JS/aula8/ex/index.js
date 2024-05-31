/*
Alfredo Gabriel tem 2 anos, pesa 0.8 kg, tem 0.3 m de altura e seu IMC é de 2,144.
Alfredo Gabriel nasceu em 2022.
*/
const nome = 'Alfredo';
const sobrenome = 'Gabriel';
const idade = 2;
const alturaEmM = 0.3;
const peso = 0.8;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = (alturaEmM * alturaEmM) / peso
anoNascimento = 2024 - idade

console.log (`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} m de altura e seu IMC é de ${imc}.`);
console.log (`${nome} ${sobrenome} naseceu em ${anoNascimento}.`);