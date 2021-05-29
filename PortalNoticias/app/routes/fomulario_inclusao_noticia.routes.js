const { check, validationResult } = require('express-validator');

module.exports = (application) => {
    application.get('/formulario', (req, res) => {
        application.app.controllers.admin.fomulario_inclusao_noticia(application, req, res);
    });    

    application.post('/noticias/salvar', [
        check('titulo', 'Titulo é obrigatorio').not().isEmpty(),
        check('resumo', 'Resumo é obrigatório').not().isEmpty(),
        check('resumo', 'Resumo deve conter entre 10 e 100 caracteres').isLength({ min: 10, max: 100 }),
        check('autor', 'Autor é obrigatório').not().isEmpty(),
        check('data_noticia', 'Data é obrigatória').not().isEmpty().isDate({ format: 'YYYY-MM-DD' }),
        check('noticia', 'Noticia é obrigatória').not().isEmpty(), 
    ],
    (req, res) => {
        application.app.controllers.admin.noticias_salvar(application, req, res);
    });    

}