/*
try {
// Executada quando não há erros
} catch(e){
// Executada quando há erros
}
*/



/*
try {
    console.log(a); // -> esse é o erro
    console.log('Abri um arquivo.');
    console.log('Manipulei o arquivo e gerou um erro.');
    console.log('Fechei o arquibo.');

    try {
        console.log(b);
    } catch {
        console.log('Deu erro.');
    } finally {
        console.log('Um Finally.')
    }

} catch(e){
    console.log('Tratando o erro.');
} finally {
    console.log('Eu sempre sou executado.')
}
*/


function mostraHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
const data = new Date('01-01-1970 12:58:14');
const hora = mostraHora(data);
console.log('São', hora);
} catch {
    console.log('Que raios é isso?');
} finally {
    console.log('Tenha um bom dia.');
}