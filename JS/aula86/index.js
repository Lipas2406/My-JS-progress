function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { 
    if(typeof msg !== 'string') return reject('BAD VALUE');

    setTimeout(() => {
        resolve(msg);
    }, tempo);
    });

}

esperaAi("Conecta ao banco de dados", aleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Busca dados', aleatorio(1, 3));
    }).then(resposta => {
        console.log(resposta)
        return esperaAi(486, aleatorio(1, 3));
    }).then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Mostra dados');
    })
    .catch(e => {
        console.log('ERRO:', e);
    }); 
