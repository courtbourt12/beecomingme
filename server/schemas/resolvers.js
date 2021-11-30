const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models/User");

const resolvers = {
  Query: {
    user: async (parent, { user_id }) => {
      if (user_id) {
        const userData = await User.findOne({ _id: user_id }).select(
          "-__v -password"
        );

        return userData;
      }
    },
    friends: async (parent, { email }) => {
      return await User.findOne({ email });
    },
    goals: async (parent, { user_id }) => {
      const goalsArray = await User.find({ _id: user_id });
      return goalsArray[0].goals;
    },
    goal: async (parent, { user_id, goal_id }) => {
      const userArray = await User.find({ _id: user_id });
      const goalsArray = userArray.goals;
      goalsArray.forEach((element) => {
        if (element._id === goal_id) {
          return element;
        }
      });
    },
    friendGoals: async (parent, { username }) => {
      const allUsers = await User.find({});
      const arrayOfGoals = [];
      const allGoals = allUsers
        .map((user) => {
          return user.goals;
        })
        .flat()
        .filter((goal) => {
          let friendArray = goal.friends.map((friend) => {
            if (friend.username === username) {
              return arrayOfGoals.push(goal);
            }
          });
        });
      return arrayOfGoals;
    },
    steps: async (parent, { user_id, goal_id }) => {
      const userArray = await User.find({ _id: user_id });
      const goalsArray = userArray[0].goals;
      let tempArray = [];
      goalsArray.forEach((Goal) => {
        if (Goal._id == goal_id) {
          const stepsArray = Goal.steps;
          const intArray = stepsArray.sort(function (a, b) {
            var keyA = new Date(a.due),
              keyB = new Date(b.due);
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
          });
          tempArray = intArray;
        }
      });
      return tempArray;
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No User with this email found!");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }
      return user;
    },
    // Add new User
    addUser: async (parent, { inputUser }) => {
      const user = await User.create({ ...inputUser });
      return user;
    },
    // Add new Goal
    addGoal: async (parent, { inputGoal }) => {
      const user = await User.findOneAndUpdate(
        { _id: inputGoal.user },
        {
          $addToSet: {
            goals: {
              title: inputGoal.title,
              description: inputGoal.description,
            },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      return user;
    },
    // Add new Step
    addStep: async (parent, { inputStep }) => {
      const user = await User.findOneAndUpdate(
        { _id: inputStep.user },
        {
          $addToSet: {
            "goals.$[outer].steps": {
              title: inputStep.title,
              description: inputStep.description,
              status: inputStep.status,
              due: inputStep.due,
            },
          },
        },
        {
          arrayFilters: [{ "outer._id": inputStep.goal }],
          new: true,
        }
      );
      console.log("user " + user);
      return user;
    },
    addFriend: async (parent, { inputFriend }) => {
      const user = await User.findOneAndUpdate(
        { _id: inputFriend.user },
        {
          $addToSet: {
            "goals.$[outer].friends": {
              username: inputFriend.username,
            },
          },
        },
        {
          arrayFilters: [{ "outer._id": inputFriend.goal }],
          new: true,
        }
      );
      console.log("user " + user);
      return user;
    },

    // Add new Comment
    addComment: async (parent, { inputComment }) => {
      const user = await User.findOneAndUpdate(
        { _id: inputComment.user },
        {
          $addToSet: {
            "goals.$[outer].steps.$[inner].comments": {
              username: inputComment.username,
              description: inputComment.description,
              // created needs to come from front end
              created: inputComment.created,
            },
          },
        },
        {
          multi: true,
          arrayFilters: [
            { "outer._id": inputComment.goal },
            { "inner._id": inputComment.step },
          ],
          new: true,
        }
      );
      return user;
    },
    // Remove Comment
    removeComment: async (
      parent,
      { user_id, goal_id, step_id, comment_id }
    ) => {
      const user = await User.findOneAndUpdate(
        { _id: user_id },
        {
          $pull: {
            "goals.$[outer].steps.$[inner].comments": {
              _id: comment_id,
            },
          },
        },
        {
          multi: true,
          arrayFilters: [{ "outer._id": goal_id }, { "inner._id": step_id }],
          new: true,
        }
      );
      return user;
    },
    // Remove step
    removeStep: async (parent, { user_id, goal_id, step_id }) => {
      const user = await User.findOneAndUpdate(
        { _id: user_id },
        {
          $pull: {
            "goals.$[inner].steps": {
              _id: step_id,
            },
          },
        },
        {
          arrayFilters: [{ "inner._id": goal_id }],
          new: true,
        }
      );
      return user;
    },
    // Remove goal
    removeGoal: async (parent, { user_id, goal_id }) => {
      const user = await User.findOneAndUpdate(
        { _id: user_id },
        {
          $pull: {
            goals: { _id: goal_id },
          },
        },
        {
          new: true,
        }
      );
      return user;
    },
  },
};

module.exports = resolvers;
