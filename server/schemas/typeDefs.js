const { gql } = require('apollo-server-express');

const typeDefs = gql`

  input BookInput {
    authors: [String]!
    description: String!
    title: String!
    bookId: String!
    image: String!
    link: String!
  }



  type Book {
    authors: [String]!
    description: String!
    title: String!
    bookId: String!
    image: String!
    link: String!
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: String
    savedBooks: [Book]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
      me: User
      getSingleUser(_id: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
