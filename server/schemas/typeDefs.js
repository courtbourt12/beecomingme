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
    user: String
    created: String!
  }

  type Auth {
    token: ID!
    user: User
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
  }

  input addStepInput {
    title: String
    description: String
    status: Int
    due: String
  }

  input addCommentInput {
    description: String
    user: String
    created: String
  }

  type Mutation {
    login(email: String!, password: String!): User

    addUser(inputUser: addUserInput!): User
    addGoal(inputGoal: addGoalInput!): User
    addStep(inputStep: addStepInput!): Goal
    addComment(inputComment: addCommentInput!): Step

    removeGoal(goal_id: ID!): User
    removeComment(step_id: ID!, comment_id: ID!): Step

    updateUser(user_id: ID!): User
    updateGoal(goal_id: ID!): User
    updateStep(step_id: ID!): Goal
    updateComment(comment_id: ID!): Step
  }
`;

module.exports = typeDefs;
