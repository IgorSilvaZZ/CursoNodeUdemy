const mysql = require('mysql');

const conexao = () => {
    return mysql.createConnection({
        host: 'localhost',
        database: 'portal_noticias',
        user: 'root',
        password: '',
    });
}

module.exports = () => {
    return conexao;
};