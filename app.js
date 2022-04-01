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
  const courses = await Course.find({isPublished: true}).sort({name: 1}).select({name: 1, author:1});
  console.log(courses);
}

getCourse();


app.listen(3000, () => {
  console.log("Connected to 3000");
});
