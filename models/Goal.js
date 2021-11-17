const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const goalSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Enter a Title",
  },
  description: {
    type: String,
    required: true,
  },
  // owner: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  // },
  owner: {
    type: Number,
    required: true,
  },
  // steps: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Step',
  // }],
  steps: {
    type: Array,
  },
  // users: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  // }],
  users: {
    type: Array,
  },
  encouragement: {
    type: Number,
  },
});
const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
