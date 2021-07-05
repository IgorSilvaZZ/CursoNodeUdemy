function UsuariosDAO(connection){
    client = connection
}

UsuariosDAO.prototype.inserirUsuario = (usuario) => {

    const collection = client.collection('usuarios');

    collection.insertOne(usuario, (err, result) => {
        if(err) {
            console.log(err);
        }

        console.log(result.insertedCount);
    })

}

UsuariosDAO.prototype.autenticar = ({ usuario, senha, req, res }) => {

    const collection = db.collection('usuarios');

    collection.find({ usuario, senha }).toArray((err, result) => {
        if(err){
            console.log(err.message);
        }

        if(result[0] !== undefined){
            req.session.autorizado = true;

            req.session.usuario = result[0].usuario;
            req.session.casa = result[0].casa;
        }
           
        if(result.length > 0){
            res.redirect('jogo')
        }else{
            res.render('index', { validacao: {}, dadosForm: {} });
        }

    })

}

module.exports = UsuariosDAO;