const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  # Ponto de entrada da API
  type Query {
    ola: String
    horaAtual: String
  }
`;

const resolvers = {
  Query: {
    ola() {
      return 'Bom dia!'
    },
    horaAtual() {
      const date = new Date();
      return `${date}`;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})