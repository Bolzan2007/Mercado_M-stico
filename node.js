const express = require("express");
const cors = require("cors");
const connection = require('./db.config.js');

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log("Rodando na porta " + port));

// Cadastro de usuários
app.post('/usuarios/cadastrar', (request, response) => {
    let params = [
        request.body.nome,
        request.body.email,
        request.body.senha,
        request.body.cpf_number,
        request.body.endereco,
        request.body.data_entrega
    ];

    let query = "INSERT INTO users (name, email, password, cpf_number, endereco, data_entrega) VALUES (?, ?, ?, ?, ?, ?);";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Usuário cadastrado com sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Erro ao cadastrar usuário",
                data: err
            });
        }
    });
});

// Listar usuários
app.get('/usuarios/listar', (request, response) => {
    let query = "SELECT * FROM users";
    connection.query(query, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "Usuários listados com sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Erro ao listar usuários",
                data: err
            });
        }
    });
});

// Alterar usuário
app.put('/usuarios/alterar/:id', (request, response) => {
    let params = [
        request.body.nome,
        request.body.email,
        request.body.senha,
        request.body.cpf_number,
        request.body.endereco,
        request.body.data_entrega,
        request.params.id
    ];

    let query = "UPDATE users SET name = ?, email = ?, password = ?, cpf_number = ?, endereco = ?, data_entrega = ? WHERE id = ?";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "Usuário alterado com sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Erro ao alterar usuário",
                data: err
            });
        }
    });
});

// Deletar usuário
app.delete("/usuarios/deletar/:id", (request, response) => {
    let params = [request.params.id];
    let query = "DELETE FROM users WHERE id = ?";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "Usuário deletado com sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Erro ao deletar usuário",
                data: err
            });
        }
    });
});

// Cadastro de produtos
app.post('/produtos/cadastrar', (request, response) => {
    let params = [
        request.body.titulo,
        request.body.preco,
        request.body.url_imagem
    ];

    let query = "INSERT INTO products (titulo, preco, url_imagem) VALUES (?, ?, ?);";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Produto cadastrado com sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Erro ao cadastrar produto",
                data: err
            });
        }
    });
});

// Listar produtos
app.get('/produtos/listar', (request, response) => {
    let query = "SELECT * FROM products";
    connection.query(query, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "Produtos listados com sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Erro ao listar produtos",
                data: err
            });
        }
    });
});

// Alterar produto
app.put('/produtos/alterar/:id', (request, response) => {
    let params = [
        request.body.titulo,
        request.body.preco,
        request.body.url_imagem,
        request.params.id
    ];

    let query = "UPDATE products SET titulo = ?, preco = ?, url_imagem = ? WHERE id = ?";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "Produto alterado com sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Erro ao alterar produto",
                data: err
            });
        }
    });
});

// Deletar produto
app.delete("/produtos/deletar/:id", (request, response) => {
    let params = [request.params.id];
    let query = "DELETE FROM products WHERE id = ?";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "Produto deletado com sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Erro ao deletar produto",
                data: err
            });
        }
    });
});
