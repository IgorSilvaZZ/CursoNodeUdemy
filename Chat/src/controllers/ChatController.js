const { validationResult } = require('express-validator');

module.exports = {

    index(req, res){

        const dataForm = req.body;
        const error = validationResult(req);

        if(!error.isEmpty()){
            console.log(error);
            res.render('index',  { validacao: error.errors })
            return
        }

        global.io.emit('msgParaCliente', { apelido: dataForm.apelido, mensagem: 'Acabou de entrar no chat' });

        res.render('chat', { dataForm });
    }
    
}