import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        _id
        username
      }
    }
`;

export const ADD_USER = gql`
  mutation addUser($inputUser: addUserInput!) {
    addUser(inputUser: $inputUser) {
        username
        email
        first_name
        last_name
        dob
    }
  }
`;

export const ADD_GOAL = gql`
  mutation addGoal($inputGoal: addGoalInput!) {
    addGoal(inputGoal: $inputGoal) {
      _id
      goals {
        _id
        title
        description
      }
    }
  }
`;

export const ADD_STEP = gql`
  mutation addStep($inputStep: addStepInput!) {
    addStep(inputStep: $inputStep) {
      _id
      goals {
        _id
        steps {
          _id
          title
          description
          status
          due
      }
    }
  }
}
`;
export const ADD_FRIEND = gql`
  mutation addFriend($inputFriend: addFriendInput!) {
    addFriend(inputFriend: $inputFriend) {
      _id
      goals {
        _id
        friends {
          _id
          username
        }
      }
    }
  }
`;
export const ADD_COMMENT = gql`
  mutation addComment($inputComment: addCommentInput!) {
    addComment(inputComment: $inputComment) {
      _id
      goals {
        _id
        steps {
          _id
          comments {
            description
            username
            created
          }
        }
      }
    }
  }
`;

export const REMOVE_GOAL = gql`
  mutation removeGoal($goal_id: ID!) {
    removeGoal(goal_id: $goal_id) {
        _id
        username
        email
        goals {
            _id
            title
            description
            steps
            friends
            encouragement
        }
      }
    }
`;

export const REMOVE_STEP = gql`
  mutation removeStep($title: String!, $description: String!, $status: Int!, $due: DateTime!) {
    removeStep(title: $title, description: $description, status: $status, due: $due) {
        _id
        username
        email
        steps {
            _id
            title
            description
            status
            comments
            due
        }
      }
    }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($description: String!, $user: String!, $created: DateTime!) {
    removeComment(description: $description, user: $user, created: $created) {
        _id
        username
        email
        comments {
            _id
            description
            user
            created
        }
      }
    }
`;

export const REMOVE_FRIEND = gql`
  mutation updateUser($user_id: ID!) {
    updateUser(user_id: $user_id) {
        _id
        username
        goals {
            friends
        }

      }
    }
`;

export const UPDATE_USER = gql`
  mutation updateUser($user_id: ID!) {
    updateUser(user_id: $user_id) {
        description
        user
        created
      }
    }
`;

export const UPDATE_GOAL = gql`
  mutation updateGoal($goal_id: ID!) {
    updateGoal(goal_id: $goal_id) {
        _id
        title
        description
        friends
        encouragement
      }
    }
`;

export const UPDATE_STEP = gql`
  mutation updateStep($step_id: ID!) {
    updateStep(step_id: $step_id) {
        _id
        title
        status
        due
      }
    }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($comment_id: ID!) {
    updateComment(comment_id: $comment_id) {
        description
        user
        created
      }
    }
`;
