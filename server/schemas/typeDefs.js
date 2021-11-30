const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    first_name: String
    last_name: String
    dob: String
    password: String
    goals: [Goal]
  }

  type Goal {
    _id: ID!
    title: String!
    description: String
    steps: [Step]
    friends: [User]
    encouragement: Int
  }

  type Step {
    _id: ID!
    title: String!
    description: String
    status: Int!
    comments: [Comment]
    due: String!
  }

  type Comment {
    _id: ID!
    description: String!
    username: String
    created: String!
  }

  type Query {
    user(user_id: ID!): User
    friends(email: String!): User
    goals(user_id: ID!): [Goal]
    goal(user_id: ID!, goal_id: ID!): Goal
    friendGoals(username: String!): [Goal]
    steps(user_id: ID!, goal_id: ID!): [Step]
  }

  input addUserInput {
    username: String
    email: String
    first_name: String
    last_name: String
    dob: String
    password: String
  }

  input addGoalInput {
    title: String
    description: String
    user: ID!
  }

  input addStepInput {
    title: String
    user: ID!
    goal: ID!
    description: String
    status: Int
    due: String
  }

  input addFriendInput {
    username: String
    user: ID!
    goal: ID!
  }

  input addCommentInput {
    description: String
    username: String
    created: String
    user: ID!
    goal: ID!
    step: ID!
  }

  type Mutation {
    login(email: String!, password: String!): User

    addUser(inputUser: addUserInput!): User
    addGoal(inputGoal: addGoalInput!): User
    addStep(inputStep: addStepInput!): User
    addFriend(inputFriend: addFriendInput!): User
    addComment(inputComment: addCommentInput!): User

    removeGoal(user_id: ID!, goal_id: ID!): User
    removeStep(user_id: ID!, goal_id: ID!, step_id: ID!): User
    removeComment(
      user_id: ID!
      goal_id: ID!
      step_id: ID!
      comment_id: ID!
    ): User
  }
`;

module.exports = typeDefs;
