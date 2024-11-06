const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  passMark: {
    type: Number,
    required: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Subject = mongoose.model("Subject", SubjectSchema);
module.exports = Subject;
