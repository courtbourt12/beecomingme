const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    first_name: String
    last_name: String
    dob: DateTime
    password: String
    goals: [Goal]
  }

  type Goal {
    _id: ID
    title: String
    description: String
    steps: [Step]
    friends: [User]
    encouragement: Int
  }

  type Step {
    _id: ID
    title: String
    description: String
    status: Int
    comments: [Comment]
    due: DateTime
  }

  type Comment {
    _id: ID
    description: String
    user: String
    created: DateTime
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    friends: [User]
    user(user_id: ID!): User
    goals(user_id: ID!): [Goal]
    goal(goal_id: ID!): Goal
    steps(goal_id: ID!): [Step]
    comments(step_id: ID!): [Comment]
  }

  input addUserInput {
    username: String
    email: String
    first_name: String
    last_name: String
    dob: DateTime
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
    due: DateTime
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(input: addUser!): Auth
    addGoal(input: addGoal!): User
    addStep(input: addStep!): Goal
    addComment(description: String!): Step

    removeFriends(goal_id: ID!, user_id: ID!): User
    removeGoal(goal_id: ID!): User
    removeStep(step_id: ID!): Goal
    removeComment(step_id: ID!, comment_id: ID!): Step

    updateUser(user_id: ID!): User
    updateGoal(goal_id: ID!): User
    updateStep(step_id: ID!): Goal
    updateComment(comment_id: ID!): Step
  }
`;

module.exports = typeDefs;
