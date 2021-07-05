const { validationResult } = require('express-validator');
const UsuariosDAO = require('../models/UsuariosDAO');
const clientMongo = require('../config/connection');

module.exports = {

    autenticar(req, res){

        const { usuario, senha } = req.body;

        const dadosForm = {
            usuario,
            senha
        }

        const error = validationResult(req)

        if(!error.isEmpty()){
            console.log(error);
            res.render('index', { validacao: error.errors, dadosForm });
            return;
        }

        const client = clientMongo();

        const UsuariosDao = new UsuariosDAO(client);

        UsuariosDao.autenticar({ usuario, senha, req, res });

    }

}