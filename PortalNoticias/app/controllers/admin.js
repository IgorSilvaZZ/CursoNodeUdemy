const { validationResult } = require('express-validator');

module.exports.fomulario_inclusao_noticia = (application, req, res) => {
    res.render('admin/form_add_noticia', { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = (application, req, res) => {
    const noticia = req.body;  
    const error = validationResult(req);
        
    if(!error.isEmpty()){
        console.log(error)
        res.render('admin/form_add_noticia', { validacao: error.errors, noticia });
        return;
    }
       
    var dbConection = application.config.connection();
    const noticiaModel = new application.app.models.NoticiasDAO(dbConection);

    noticiaModel.salvarNoticia(noticia, (err, result) => {
        if (err) return res.status(400).send("Erro ao realizar a consulta");
            
        res.redirect('/noticias');
    }); 
}