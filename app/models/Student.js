const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define collection and schema for Business
let Student = new Schema(
  {
    name: {
      type: String,
    },
    id: {
      type: String,
    },
    grades: {
      type: Array,
    },
    approved: {
      type: Boolean,
    },
    average: {
      type: Number,
    },
  },
  {
    collection: "students",
  }
);


module.exports = mongoose.model("Student", Student);
