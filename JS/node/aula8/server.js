const express = require('express');
const app = express();

// Middleware para interpretar body de formulário
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

app.use(express.urlencoded(
    {
        extended: true
    }
));

app.get('/testes/:idUsuario', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
    console.log(req.body); // Aqui ele vai mostrar { nome: 'valor' }
    res.send(`Gostei da requisição, ${req.body.nome}!`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});


