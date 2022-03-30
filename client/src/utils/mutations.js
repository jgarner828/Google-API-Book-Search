import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  # create a GraphQL query to be executed by Apollo Client
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          authors
          description
          title
          bookId
          image
          link
        }
      }
    }
  }  
`;
export const ADD_USER = gql`
  # create a GraphQL query to be executed by Apollo Client
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          authors
          description
          title
          bookId
          image
          link
        }
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  # create a GraphQL query to be executed by Apollo Client
  mutation saveBook(input: $input) {
    }
  }
`;
export const REMOVE_BOOK = gql`
  # create a GraphQL query to be executed by Apollo Client
  mutation deleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      username
      bookCount
      savedBooks {
        authors
        description
        title
        bookId
        image
        link
      }
      _id
      email
    }
  }
`;
