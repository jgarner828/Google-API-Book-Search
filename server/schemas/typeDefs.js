const { gql } = require('apollo-server-express');

const typeDefs = gql`

input BookInput {
  bookId: String
  description: String
  image: String
  title: String
  authors: [String]
}


  type Book {
    bookId: ID
    description: String
    image: String
    title: String
    authors: [String]
  }



  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
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
    saveBook(bookData: BookInput): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
