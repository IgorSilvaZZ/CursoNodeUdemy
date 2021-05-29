const { Router } = require('express');
const { check } = require('express-validator');
const ChatController = require('../controllers/ChatController');

const router = Router();

router.post('/chat', [
    check('apelido', 'Nome ou Apelido é Obrigatorio').not().isEmpty(),
    check('apelido', 'Nome ou Apelido deve conter entre 3 e 15 caracteres').isLength({ min: 3 , max: 15 }),
], ChatController.index);


router.get('/chat', ChatController.index);

module.exports = router;