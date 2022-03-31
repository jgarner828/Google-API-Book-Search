import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
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
  mutation saveBook($input: String!) {
    saveBook(input: $input) {
      _id
    }
  }
`;
export const REMOVE_BOOK = gql`
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
