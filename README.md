Esta documentação fornece uma visão detalhada sobre a API e o banco de dados utilizados no projeto. A API foi desenvolvida com Node.js e Express e se conecta a um banco de dados MySQL, permitindo o gerenciamento de usuários e produtos através de operações básicas de CRUD.

O banco de dados MySQL, denominado crud_api, é estruturado para armazenar informações sobre usuários e produtos, com tabelas específicas para cada um. A tabela users armazena detalhes dos usuários, incluindo nome, e-mail, senha, número de CPF, endereço e data de entrega. Além disso, a tabela inclui um campo de status que pode ser 'Ativo' ou 'Inativo', e um campo de timestamp para registrar a data e hora de criação do usuário. A tabela products é usada para guardar informações sobre produtos, como título, preço e URL da imagem associada ao produto.

Uma tabela adicional, chamada favorites, relaciona usuários e produtos, permitindo que um usuário marque produtos como favoritos. Esta tabela contém referências às tabelas de users e products para estabelecer essas relações.

A API disponibiliza diversos endpoints para interagir com o banco de dados. Para usuários, é possível cadastrar novos registros, listar todos os usuários, atualizar informações de um usuário existente e deletar um usuário. O cadastro de um usuário requer informações como nome, e-mail, senha, número de CPF, endereço e data de entrega. Para listar usuários, a API retorna todos os registros presentes na tabela users. Atualizações e exclusões são realizadas identificando o usuário pelo seu ID.

Similarmente, para produtos, a API oferece endpoints para cadastrar novos produtos, listar todos os produtos, atualizar e deletar produtos existentes. O cadastro de produtos exige o título, preço e URL da imagem. A listagem de produtos retorna todos os registros da tabela products, e as operações de atualização e exclusão são baseadas no ID do produto.

Para utilizar a API, você deve primeiro configurar o banco de dados MySQL conforme a estrutura fornecida e ajustar as configurações de conexão no arquivo db.config.js para corresponder às suas credenciais de banco de dados. Após a configuração, a API pode ser iniciada e estará disponível em http://localhost:3000.

Esta documentação deve servir como guia para entender a estrutura do banco de dados e como interagir com a API para gerenciar usuários e produtos de forma eficiente. Se você tiver dúvidas ou precisar de assistência adicional, não hesite em buscar ajuda ou abrir uma issue no repositório do projeto.
