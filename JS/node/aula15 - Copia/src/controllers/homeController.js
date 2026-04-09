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
    res.render('index', {
        // titulo: 'Este será o título da página',
        numeros: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.')
    return;
};

