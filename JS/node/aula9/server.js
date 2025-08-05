const express = require('express');
const app = express();
const routes = require('./routes');

// Middleware para interpretar body de formulário
app.use(express.urlencoded({ extended: true }));
app.use(routes); 

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});


