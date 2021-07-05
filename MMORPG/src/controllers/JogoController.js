

module.exports = {

    sair(req, res){

        req.session.destroy((err) => {
            res.render('index', { validacao: {}, dadosForm: {} });
        });

    }

}