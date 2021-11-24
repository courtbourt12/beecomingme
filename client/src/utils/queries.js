import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
<<<<<<< HEAD
        _id        
        username
        email
        first_name
        last_name
        dob
        password
        goals
=======
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
>>>>>>> fb44a3531188c36526487f87d7c91538547b52c2
      }
    }
  }
`;
