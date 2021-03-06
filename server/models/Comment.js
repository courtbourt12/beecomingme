const { Schema } = require("mongoose");

const commentSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  created: {
    type: Date,
    required: "Enter a deadline",
  },
});

module.exports = commentSchema;
