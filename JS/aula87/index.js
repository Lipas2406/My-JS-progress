function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { 
    setTimeout(() => {
        if(typeof msg !== 'string') return reject('BAD VALUE');
        resolve(msg.toUpperCase() + ' - Passei na promise!');
    }, tempo);
    });
}

// Promise.all | Promise.race | Promise.resolve | Promise.reject 

/*
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 1000),
    esperaAi('Promise 2', 1234),
    esperaAi('Promise 3', 2),
    'Outro valor'
]

Promise.all(promises)
    .then(function(valor) {
        console.log(valor);
    })  
    .catch(function(erro) {
    console.log('Erro: ', erro);
    })
*/



/*
const promises = [
    esperaAi('Promise 1', aleatorio(1, 4)),
    esperaAi('Promise 2', aleatorio(1, 4)),
    esperaAi('Promise 3', aleatorio(1, 4)),
    esperaAi(489, aleatorio(1, 4)),
]

Promise.race(promises)
    .then(function(valor) {
        console.log(valor);
    })  
    .catch(function(erro) {
    console.log('Erro: ', erro);
    })
*/


function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixe a página', 1000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch (e => console.log('Erro: ', e));