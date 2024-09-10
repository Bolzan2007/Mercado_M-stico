const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',          // O endereço do seu servidor MySQL
    user: 'root',               // Seu usuário do MySQL
    password: 'sua_senha',      // A senha do usuário
    database: 'crud_api'        // O nome do banco de dados que você criou
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL');
});

module.exports = connection;
