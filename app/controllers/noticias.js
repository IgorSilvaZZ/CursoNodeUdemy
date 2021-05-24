module.exports.noticias = (application, req, res) => {
    const dbConection = application.config.connection();

    const noticiasModel = new application.app.models.NoticiasDAO(dbConection);

    noticiasModel.getNoticias((err, result) => {
        if (err) return res.status(400).send("Erro ao realizar a consulta");
            
        res.render("noticias/noticias", { noticias: result });
    });
}

module.exports.noticia = (application, req, res) => {
    var dbConection = application.config.connection();

    const noticiaModel = new application.app.models.NoticiasDAO(dbConection);

    noticiaModel.getNoticia((err, result) => {
        if (err) return res.status(400).send("Erro ao realizar a consulta");
            
        res.render("noticias/noticia", { noticia: result[0] });
    });
}