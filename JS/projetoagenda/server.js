require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto'); // basicamente, diz pra gente que o  app está pronto e já pode ouvir requisições
    })
    .catch(e => console.log(e));

const session = require('express-session'); // gera cookies para os usuários
const MongoStore = require('connect-mongo'); //isso salva as sessões dentro da base de dados
const flash = require('connect-flash'); // gera mensagens auto-destrutivas; salvas em session
const routes = require('./routes'); // rotas da aplicação 
const path = require('path'); // caminho literal 
const helmet = require('helmet');// recomendação do Express
const csrf = require('csurf'); // proteje os formulários 
const { midddlewareGlobal, checkCsrfError, csrfMiddleware, csrfSafeMiddleware } = require('./src/middlewares/middleware');



app.use(helmet());
app.use(express.urlencoded({ extended: true })); // permite postagem de formulário para dentro da aplicação
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public'))); // puxa os arquivos que devem ser acessados diretamente

// CORREÇÃO: Para connect-mongo versão 6.x
const sessionOptions = session({
    secret: 'paosdkpsoadk aspdokaspdoka sdpoask dpoakd as das()',
    store: MongoStore.create({ 
        mongoUrl: process.env.CONNECTIONSTRING,
        mongooseConnection: mongoose.connection // Opcional, se quiser usar a conexão existente
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // Corrigi: 1000 (ms) * 60 * 60 * 24 * 7
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); // caminho dos arquivos html
app.set('view engine', 'ejs'); // engine que roda o html no ejs 

app.use(csrf()); 
app.use(midddlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);


app.on('pronto', () => {
    app.listen(4000, () => {
        console.log('Acessar http://localhost:4000');
        console.log('Servidor executando na porta 4000');
    });
}); // permite a escuta das requisições