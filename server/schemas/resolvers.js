const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models/User");
// const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { user_id }) => {
      if (user_id) {
        const userData = await User.findOne({ _id: user_id }).select(
          "-__v -password"
        );

        return userData;
      }

      // throw new AuthenticationError("Not logged in");
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
      console.log("allUsers ", allUsers);
      const allGoals = allUsers
        .map((user) => {
          console.log("user.goals ", user.goals);
          return user.goals;
        })
        .flat()
        .filter((goal) => goal.friends[0].includes(username));
      console.log("allGoals ", allGoals);
      return allGoals;
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

    // Add new Comment
    // addComment: async (parent, body) => {
    //   const comment = await Comment.create(body);
    //   return comment._id;
    // },
    //   User.findOneAndUpdate(
    //     {  _id: "Manasa" },
    //     { $push: { "sensors.$[outer].measurements.$[inner].example": { "time": req.body.time } } },
    //     { "arrayFilters:" [{"outer._id": ObjectId("57da0a4bf3884d1fb2234c74"), {"inner._id": ObjectId("57da0a4bf3884d1fb2234c74"}}]
    // );
    addComment: async (parent, { inputComment }) => {
      console.log(inputComment);
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
          arrayFilters: [
            { "outer._id": inputComment.goal },
            { "inner._id": inputComment.step },
          ],
          new: true,
        }
      );

      console.log("user " + user);
      return user;
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
