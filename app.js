const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/exercise-1")
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => console.log(err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

//EXERCISE 1

// Get all the published Backend Courses,
// Sort them by their name,
// Pick only their name and author,
// Display them on console

async function getCourse() {
  const course = await Course.find();
}

app.listen(3000, () => {
  console.log("Connected to 3000");
});
