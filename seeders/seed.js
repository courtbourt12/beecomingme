const db = require("../config/connection");
const { User, Goal, Step, Comment } = require("../models");

const userData = require("./userData.json");
const goalData = require("./goalData.json");
const stepData = require("./stepData.json");
const commentData = require("./commentData.json");

db.once("open", async () => {
  // clean database
  await User.deleteMany({});
  await Goal.deleteMany({});
  await Step.deleteMany({});
  await Comment.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userData);
  const goals = await Goal.insertMany(goalData);
  const steps = await Step.insertMany(stepData);
  const comments = await Comment.insertMany(commentData);

  // pushes the goal onto users[0]
  users[0].goals.push.(users[0]._id);
  await users[0].save();

  users[0].goals.push.(users[0]._id);

  //   // randomly add a professor to each class
  //   const tempProfessor =
  //     professors[Math.floor(Math.random() * professors.length)];
  //   newUser.professor = tempProfessor._id;
  //   await newUser.save();

  //   // reference class on professor model, too
  //   tempProfessor.classes.push(newUser._id);
  //   await tempProfessor.save();
  // }

  console.log("all done!");
  process.exit(0);
});

// passwords should decrypt to "root1234", taken from babyinsite
