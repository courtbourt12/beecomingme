const { AuthenticationError } = require("apollo-server-express");
const { User, Step, Goal, Comment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    friends: async (parent, { email }) => {
      return User.findOne({ email });
    },
    goals: async (parent, { user_id }) => {
      return User.find({ _id: user_id });
    },
    goal: async (parent, { goal_id }) => {
      return Goal.findOne({ _id: goal_id });
    },
    steps: async (parent, { goal_id }) => {
      return Step.find({ _id: goal_id });
    },
    comments: async (parent, { step_id }) => {
      return Step.find({ _id: step_id });
    },
  },
  Mutations: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No User with this email found!");
      }

      const correctPw = await user.comparePassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    // Add new User
    addUser: async (parent, body) => {
      const user = await User.create(body);
      const token = signToken(user);
      return { token, user };
    },
    // Add new Goal
    addGoal: async (parent, body) => {
      const goal = await Goal.create(body);
      return goal._id;
    },
    // Add new Step
    addStep: async (parent, body) => {
      const step = await Step.create(body);
      return step._id;
    },
    // Add new Comment
    addComment: async (parent, body) => {
      const comment = await Comment.create(body);
      return comment._id;
    },
    // Remove Comment
    removeComment: async (parent, { step_id, comment_id }) => {
      return Step.findOneAndUpdate(
        { _id: step_id },
        { $pull: { comments: { _id: comment_id } } },
        { new: true }
      );
    },
    // Remove Friends from goal
    removeFriends: async (parent, { goal_id, user_id }) => {
      return Step.findOneAndUpdate(
        { _id: goal_id },
        { $pull: { friends: { _id: user_id } } },
        { new: true }
      );
    },
    // Remove goal
    removeGoal: async (parent, { goal_id }) => {
      return Goal.findOneAndDelete({ _id: goal_id });
    },
    // Remove step
    removeStep: async (parent, { step_id }) => {
      return Step.findOneAndDelete({ _id: step_id });
    },
    // Update User information
    updateUser: async (parent, { user, body }) => {
      return User.findOneAndUpdate(
        { _id: user._id },
        {
          $addToSet: { addUser: { body } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    updateUser: async (parent, body) => {
      return await User.findOneAndUpdate(
        { _id: body._id },
        { body },
        { new: true }
      );
    },
    updateGoal: async (parent, body) => {
      return await Goal.findOneAndUpdate(
        { _id: body._id },
        { body },
        { new: true }
      );
    },
    updateStep: async (parent, body) => {
      return await Step.findOneAndUpdate(
        { _id: body._id },
        { body },
        { new: true }
      );
    },
    updateComment: async (parent, body) => {
      return await Comment.findOneAndUpdate(
        { _id: body._id },
        { body },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
