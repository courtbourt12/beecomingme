const { Schema } = require("mongoose");
const commentSchema = require("./Comment");

const stepSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Enter a Title",
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  comments: [commentSchema],
  due: {
    type: Date,
    required: "Enter a deadline",
  },
});

module.exports = stepSchema;
