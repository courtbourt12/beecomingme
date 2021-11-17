const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stepSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Enter a Title",
  },
  // goal: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Goal',
  // },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  comments: {
    type: Array,
  },
  due: {
    type: Date,
    required: "Enter a deadline",
  },
});
const Step = mongoose.model("Step", stepSchema);

module.exports = Step;
