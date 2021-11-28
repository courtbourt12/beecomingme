const { Schema } = require("mongoose");
const stepSchema = require("./Step.js");

const goalSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: "Enter a Title",
    },
    description: {
      type: String,
      required: true,
    },
    steps: [stepSchema],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    encouragement: {
      type: Number,
    },
  },
);

module.exports = goalSchema;