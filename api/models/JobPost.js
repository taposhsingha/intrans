const mongoose = require("mongoose");

const JobPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    employstatus: {
      type: String,
      required: true,
    },
    additionreq: {
      type: String,
      required: false,
    },
    vacancy: {
      type: String,
      required: true,
    },
    edureq: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    deadline: {
      type: String,
      required: false,
    },
    jobtype: {
      type: Array,
      required: true,
    },
    jobcandidates: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobPost", JobPostSchema);
