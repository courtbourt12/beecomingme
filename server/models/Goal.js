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

  {
    toJSON: {
      virtuals: true,
    },
  }
);

goalSchema.virtual("dueDate").get(function () {
  let stepStuff = this.steps;

  const latestDate = stepStuff.reduce((previous, current) => {
    const dateConvert = (args) => {
      date = args.slice(0, 10);
      date2 = date.replace("-", "");
      dateParsed = parseInt(date2);
      return dateParsed;
    };
    let previousDue = dateConvert(previous.due);
    let currentDue = dateConvert(current.due);

    if (currentDue > previousDue) {
      return currentDue;
    } else {
      return previousDue;
    }
  });

  return latestDate;
});

module.exports = goalSchema;
