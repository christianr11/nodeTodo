const mongoose = require("mongoose");

const todoModel = mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoModel);
