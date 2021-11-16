const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Number,
    required: true,
  },
  created: {
    type: Date,
    required: "Enter a deadline",
    },
    step: {
        type: Number,
        required: true,
  },
});
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
