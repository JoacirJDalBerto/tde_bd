# COMO RODAR O PROJETO
## inicialmente criar as tabelas no banco de dados
npx sequelize-cli db:migrate

## Subir o ambiente vai enviar os dados para o mysql
npm run dev




// mais infos
## as migrations e models foram criadas automaticamente com o comando abaixo
## Como foram criadas as migrations
foi criado cada tabela com o comando abaixo alterando o nome e os atributos, o comando insere a estrutura na pasta migrations e cria um arquivo js em models

    npx sequelize-cli model:generate --name funcionario --attributes fno:integer,fnome:string
