const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: Int!
    name: String!
    username: String!
    avatar: String!
  }
  type Repository {
    id: Int!
    name: String!
    owner: String!
    url: String!
    contributorsAmount: Int!
  }
  type Query {
    user(username: String!): User!
    organizationRepositories(organization: String!): [Repository!]!
  }
`;
