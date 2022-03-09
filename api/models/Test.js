const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema(
  {
    type: {
      type: Array,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Test", TestSchema);
