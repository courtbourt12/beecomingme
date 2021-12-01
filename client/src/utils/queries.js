import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query user($user_id: ID!){
    user(user_id: $user_id) {
      _id
      username
      email
      first_name
      last_name
      dob
      password
      goals {
        _id
        title
        description
        steps {
          _id
          title
          description
          status
          comments {
            description
            username
            created
          }
          due
        }
        friends {
          username
        }
        encouragement
      }
    }
  }
`;
export const QUERY_FRIEND_GOALS = gql`
  query friendGoals($username: String!) {
    friendGoals(username: $username) {
      _id
      ownerID
      ownerName
      title
      description
      steps {
        _id
        title
        description
        status
        comments {
          description
          username
          created
        }
        due
      }
      friends {
        username
      }
      encouragement
    }
  }
`;
export const QUERY_FRIEND = gql`
  query friends($email: String!) {
    friends(email: $email) {
      _id
      username
      email
      first_name
      last_name
      dob
      password
      goals {
        _id
        title
        description
        steps {
          _id
          title
          description
          status
          comments {
            description
            username
            created
          }
          due
        }
        friends {
          _id
        }
        encouragement
      }
    }
  }
`; 