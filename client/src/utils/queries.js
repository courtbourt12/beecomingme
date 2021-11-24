import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
        _id        
        username
        email
        first_name
        last_name
        dob
        password
        goals
      }
    }
  }
`;
