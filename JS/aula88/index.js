function aleatorio(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { 
    setTimeout(() => {
        if(typeof msg !== 'string') {
            reject('BAD VALUE')
            return;
        };

        resolve(msg.toUpperCase() + ' - Passei na promise!');
        return;
        }, tempo);
    });
}



/*
esperaAi('Fase 1', aleatorio())
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', aleatorio());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', aleatorio());
    })
    .then(fase => {
        console.log(fase);
        return fase;
    })
    .then(fase => {
        console.log('Terminamos a fase', fase)
    })
    .catch(e => console.log(e));
*/


async function executa() {
    try {
    const fase1 = await esperaAi('Fase 1', aleatorio());
    console.log(fase1);
    const fase2 = await esperaAi(4, aleatorio());
    console.log(fase2);
    const fase3 = await esperaAi('Fase 3', aleatorio());
    console.log(fase3);
    console.log('Terminamos na fase:', fase3);
    } catch(e) {
        console.log(e) ;
    }
}

executa();

// Estados de Promises:
// pending -> pendente - quando não houve comando de execução
// fullfilled -> resolvida - quando houve comando de execução e é true
// rejected -> rejeitada - quando houve comando de execução mas é false



/*
//Pending:

async function executa() {
    try {
    const fase1 = esperaAi('Fase 1', 500);
    console.log(fase1);
    if(fase1 !== 'FASE 1 - Passei na promise!') {
        setTimeout(function () {
            console.log('Esta promise estava pendente: ', fase1);
        }, 0);
    }

    const fase2 = await esperaAi('Fase 2', aleatorio());
    console.log(fase2);

    const fase3 = await esperaAi('Fase 3', aleatorio());
    console.log(fase3);

    console.log('Terminamos na fase:', fase3);
    } catch(e) {
        console.log(e) ;
    }
}

executa();
*/