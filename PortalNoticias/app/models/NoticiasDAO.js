function NoticiasDAO(dbConnection){
    connection = dbConnection;
}

NoticiasDAO.prototype.getNoticias = (callback) => {
    connection.query('select * from noticias order by data_criaca desc', callback);
}

NoticiasDAO.prototype.getNoticia = (idNoticia, callback) => {
    connection.query(`select * from noticias where id = ${idNoticia}`, callback);
}

NoticiasDAO.prototype.salvarNoticia = (noticia, callback) => {
    connection.query('insert into noticias set ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = (callback) => {
    connection.query('select * from noticias order by data_criaca limit 5', callback);
}

module.exports = () => {
    return NoticiasDAO;
}