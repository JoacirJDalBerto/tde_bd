# Subir o ambiente
npm run dev

# Criar migration
foi criado cada tabela com o comando abaixo alterando o nome e os atributos, o comando insere a estrutura na pasta migrations e cria um arquivo js em models

    npx sequelize-cli model:generate --name funcionario --attributes fno:integer,fnome:string

# criar essa tabela no banco de dados
npx sequelize-cli db:migrate