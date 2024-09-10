-- Criando o banco de dados
CREATE DATABASE crud_api;
USE crud_api;

-- Criando a tabela de usuários
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    cpf_number BIGINT,
    endereco VARCHAR(255),             -- Adicionando o campo endereço
    data_entrega DATE,                 -- Adicionando o campo data de entrega
    status ENUM('Ativo','Inativo') DEFAULT('Ativo'),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserindo um usuário
INSERT INTO users(name,email,password,cpf_number, endereco, data_entrega)
VALUES("Gabriel Martins","gabriel.martins@exemplo.com","senha123",12345678900, "Rua das Flores, 456", "2024-09-20");

-- Selecionando todos os usuários
SELECT * FROM users;

-- Atualizando um usuário
UPDATE users SET password = "NovaSenha", name = "João Silva" WHERE id = 1;

-- Selecionando o usuário com id 1
SELECT * FROM users WHERE id = 1;

-- Excluindo o usuário com id 1
DELETE FROM users WHERE id = 1;

-- Selecionando todos os usuários
SELECT * FROM users;

-- Criando a tabela de produtos
CREATE TABLE products (
    id INT AUTO_INCREMENT,
    titulo VARCHAR(255),
    preco DECIMAL(10, 2),
    url_imagem VARCHAR(255),
    PRIMARY KEY (id)
);

-- Criando a tabela de favoritos
CREATE TABLE favorites (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    item_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (item_id) REFERENCES products(id)
);
