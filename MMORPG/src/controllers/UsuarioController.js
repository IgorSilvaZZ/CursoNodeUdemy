const { validationResult } = require('express-validator');
const UsuariosDAO = require('../models/UsuariosDAO');
const clientMongo = require('../config/connection');

module.exports = {

    cadastrar(req, res){

        const { nome, usuario, senha } = req.body;

        const dadosForm = {
            nome, 
            usuario, 
            senha 
        }

        const error = validationResult(req);

        if(!error.isEmpty()){
            console.log(error);
            res.render('cadastro', { validacao: error.errors, dadosForm });
            return
        } 
        
        const client = clientMongo();

        const UsuariosDao = new UsuariosDAO(client);

        UsuariosDao.inserirUsuario(dadosForm);

        res.send('Podemos Cadastrar!')

    }

}