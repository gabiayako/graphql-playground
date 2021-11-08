const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const GithubApi = require('./datasource');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    githubAPI: new GithubApi(),
  }),
});

server.listen().then(({ url }) => console.log(`server running on ${url}`));
