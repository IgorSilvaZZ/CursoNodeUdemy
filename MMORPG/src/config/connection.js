const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';

const dbName = 'got';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {

    if(err) {
        console.log(err.message);
    }

    console.log('Conectado com Sucesso!');

    db = client.db(dbName);
})

const getDatabase = () => {
    return db;
}

module.exports = getDatabase;