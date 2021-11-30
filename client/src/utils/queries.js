import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    user(user_id: $user_id) {
      _id
      username
      email
      first_name
      last_name
      dob
      password
      goals{
        _id
        title
        description
        steps{
          _id
          title
          description
          status
          comments{
            description
            user
            created
          }
          due
        }
        friends{
          _id
        }
        encouragement
      }
    }
  }
`;
