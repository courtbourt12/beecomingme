import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
//input is too generic, change to a more specific name
//in typeDefs, change line 79 addGoal! to addGoalInput!
export const ADD_GOAL = gql`
  mutation addGoal($title: String!, $description: String!, $friends: Array!, $encouragement: Int!) {
    addGoal(title: $title, description: $description, friends: $friends, encouragement: $encouragement) {
        _id
        title
        description
        friends
        encouragement
      }
    }
  }
`;

export const ADD_STEP = gql`
  mutation addStep($title: String!, $description: String!, $status: Int!, $due: DateTime!) {
    addStep(title: $title, description: $description, status: $status, due: $due) {
        _id
        title
        status
        due
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($description: String!, $user: String!, $created: DateTime!) {
    addComment(description: $description, user: $user, created: $created) {
        description
        user
        created
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($goal_id: ID!, $user_id: ID!) {
    removeFriend(goal_id: $goal_id, user_id: $user_id) {
        _id
        username
        email
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
  }
`;