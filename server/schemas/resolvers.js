const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models/User.js");
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
      return await User.findOne({ email });
    },
    goals: async (parent, { user_id }) => {
      const goalsArray = await User.find({ _id: user_id });
      return goalsArray.goals;
    },
    goal: async (parent, { user_id, goal_id }) => {
      const userArray = await User.find({ _id: user_id });
      const goalsArray = userArray.goals;
      goalsArray.forEach((element) => {
        if (element._id === goal_id) {
          return element;
        } else {
          return "No Goal Found";
        }
      });
    },
    steps: async (parent, {user_id, goal_id }) => {
      const userArray = await User.find({ _id: user_id });
      const goalsArray = userArray.goals;
      goalsArray.forEach((element) => {
        if (element._id === goal_id) {
          return element.steps;
        } else {
          return "No Steps Found";
        }
      });
    },
    comments: async (parent, { user_id, goal_id, step_id }) => {
      const userArray = await User.find({ _id: user_id });
      const goalsArray = userArray.goals;
      goalsArray.forEach((goalEl) => {
        if (goalEl._id === goal_id) {
          const stepsArray = goalEl.steps;
          stepsArray.forEach((stepEl) => {
            if (stepEl._id === step_id) {
              return stepEl.comments;
            } else {
              return "No Comments Found";
            }
          })
        } else {
          return "No Steps Found";
        }
      });
    },
  },
  Mutation: {
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
      console.log("resolvers.js login mutation triggered")
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
    // Remove goal
    removeGoal: async (parent, { goal_id }) => {
      return Goal.findOneAndDelete({ _id: goal_id });
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
