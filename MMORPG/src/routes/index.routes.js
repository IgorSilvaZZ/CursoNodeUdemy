const { Router } = require('express');
const { check } = require('express-validator');

const UsuarioController = require('../controllers/UsuarioController');
const AutenticarController = require('../controllers/AutenticarController');
const JogoController = require('../controllers/JogoController');

const router = Router();

router.get('/', (req, res) => {
	res.render('index', { validacao: {}, dadosForm: {} });
});

router.get('/cadastro', (req, res) => {
	res.render('cadastro', { validacao: {}, dadosForm: {} });
});

router.get('/jogo', (req, res) => {
	if(req.session.autorizado){
		res.render('jogo');
	}else{
		res.send('Usuario precisa fazer login!');
	}
});

router.post('/cadastrar', [ 
	check('nome', 'Nome não pode ser vazio').not().isEmpty(),
	check('usuario', 'Usuario não pode ser vazio').not().isEmpty(),
	check('senha', 'Senha não pode ser vazio').not().isEmpty(),
	check('casa', 'Casa não pode ser vazio').not().isEmpty(),
] ,UsuarioController.cadastrar);

router.post('/autenticar', [
	check('usuario', 'Usuario não pode ser vazio').not().isEmpty(),
	check('senha', 'Senha não pode ser vazio').not().isEmpty(),
], AutenticarController.autenticar);

router.get('/sair', JogoController.sair);

module.exports = router;