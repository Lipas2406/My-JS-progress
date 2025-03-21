/*
// 1:
const mod1 = require('./mod1');
console.log(mod1.falaNome()); 

// 2:
const falaNome = require('./mod1').falaNome
console.log(falaNome());

// 3:
const falaNome = mod1.falaNome;
console.log(falaNome());
*/

/*
const { nome, sobrenome, falaNome } = require('./mod1');
console.log(nome, sobrenome, falaNome());
*/

/*
const {Pessoa} = require('./mod1');

const p1 = new Pessoa ('Lipas', 'Alfredo');
console.log(p1);
*/

const path = require('path');
const axios = require('axios');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));