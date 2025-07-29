const express = require('express');
const app = express();

//         Criar,  Ler,  Atualizar, Apagar
// CRUD -> CREATE, READ, UPDATE,    DELETE
//         post,   get,  put,       delete

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="name">
    <button>Enviar</button>
    </form>    
    `); 
}); 

app.post('/', (req, res) => {
    res.send('Gostei da requisição');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por nos contatar!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});

