module.exports.index = (application, req, res) => {

    const dbConnection = application.config.connection();
    const noticiasModel = new application.app.models.NoticiasDAO(dbConnection);
    
    noticiasModel.get5UltimasNoticias((error, result) => {
        res.render("home/index", { noticias: result });
    });
}