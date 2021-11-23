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
    friends: [User]
  }

  type Goal {
    _id: ID
    title: String
    description: String
    owner: String
    steps: [Step]
    users: [User]
    encouragement: Int
  }

  type Step {
    _id: ID
    title: String
    goal: String
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
    step: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(user_id: ID!): User
    goals(user_id: ID!): [Goal]
    goal(goal_id: ID!): Goal
    steps: [Step]
    comments: [Comment]
  }

  input addGoal {
    title: String
    description: String
    owner: String
    steps: [Step]
    users: [User]
    encouragement: Int
  }

  input Step {
    title: String
    description: String
    status: Int
    comments: [Comment]
    due: DateTime
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(username: String!, email: String!, password: String!): Auth
    addGoal(input: addGoal!): User
    addStep(input: addStep!): Goal
    addComment(description: String!): Step

    removeUser(user_id: ID!): User
    removeGoal(goal_id: ID!): User
    removeStep(step_id: ID!): Goal
    removeComment(comment_id: ID!): Step

    updateUser(user_id: ID!): User
    updateGoal(input: addGoal!): User
    updateStep(input: addStep!): Goal
    updateComment(description: String!): Step
  }
`;

module.exports = typeDefs;
