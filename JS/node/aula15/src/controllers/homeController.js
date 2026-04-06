/*
const HomeModel = require('../models/HomeModel')


// HomeModel.create({
//     titulo: 'Tudo novo',
//     descricao: 'Muita novidade!'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));


HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

*/


exports.paginaInicial = (req, res) => {
    console.log(req.flash('info'), req.flash('error'), req.flash('success'));
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.')
    return;
};

