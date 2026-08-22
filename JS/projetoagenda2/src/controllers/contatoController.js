const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
    // A view lê contato.nome, contato.email etc. Num cadastro novo não existe
    // contato ainda, então mandamos um objeto vazio: as chaves saem undefined,
    // e o EJS imprime undefined como string vazia.
    res.render('contato', { contato: {} });
}

exports.register = async (req, res) => {
    // try {
    //     const contato = new Contato(req.body);
    //     await contato.register();
    //     req.flash('success', 'Contato criado com sucesso.');
    //     req.session.save(() => res.redirect('/contato/index'));
    // } catch (error) {
    //     console.error(error);
    //     req.flash('errors', 'Erro ao criar contato.');
    //     req.session.save(() => res.redirect('/contato/index'));
    // }

    try {
    const contato = new Contato(req.body);
    await contato.register();
    
    if (contato.errors.length > 0) {
        req.flash('errors', contato.errors);
        req.session.save(() => res.redirect('/contato/index'));
        return;
    }   

    req.flash('success', 'Contato criado com sucesso.');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    } catch (error) {
        console.error(error);
        req.flash('errors', 'Erro ao criar contato.');
        req.session.save(() => res.redirect('back'));
    }
};

exports.editIndex = async (req, res) => {
    if (!req.params.id) return res.render('404');

    const contato = await Contato.buscaPorId(req.params.id);
    if (!contato) return res.render('404');
    res.render('contato', { contato });
}