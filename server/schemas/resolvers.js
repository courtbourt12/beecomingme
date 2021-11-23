const { AuthenticationError } = require("apollo-server-express");
const { User, Step, Goal, Comment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        users: async () => {
          return User.find();
        },
        user: async (parent, { username }) => {
          return User.findOne({ username }).populate('goal');
        },
        goals: async (parent, { username }) => {
          const params = username ? { username } : {};
          return Thought.find(params).sort({ createdAt: -1 });
        },
        goal: async (parent, { thoughtId }) => {
          return Thought.findOne({ _id: thoughtId });
        },
      }, 
};

module.exports = resolvers;
