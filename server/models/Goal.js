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
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  steps: [{
    type: Schema.Types.ObjectId,
    ref: 'Step',
  }],
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  encouragement: {
    type: Number,
  },
});
const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
