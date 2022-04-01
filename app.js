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

// async function getCourse() {
//   const courses = await Course.find({isPublished: true, tags: 'backend'}).sort({name: 1}).select({name: 1, author:1})
//   console.log(courses);
// }

// getCourse();

//EXERCISE 1

//EXERCISE 2

//Get all the published Backend and Frontend Courses,
//Sort them by their price in a descending order,
//pick only name and author,
//Display them on console

// async function getCourses() {
//   const courses = await Course.find({
//     isPublished: true,
//     tags: { $in: ["backend", "frontend"] },
//   })
//     .sort("-price")
//     .select("author name");

//   console.log(courses);
// }

// getCourses();

//EXERCISE 2

//EXERCISE 3

// Get all the published courses that costs more than 15$ or more, OR
// They contain the word 'by' in their title

// async function getCourses() {
//   const result = await Course.find({
//     isPublished: true,
//     price: { $gte: 15 },
//   })
//     .or({ title: /.* by *./ })
//     .select("name author price");
//   console.log(result);
// }

// getCourses();

//EXERCISE 3

// UPDATING COURSES

// async function updateCourse(id) {
//   const course = await Course.findOneAndUpdate(
//     id,
//     {
//       $set: {
//         name: "Kurs",
//         author: "Une",
//         isPublished: true,
//       },
//     },
//     { new: true }
//   );
//   console.log(course);
// }

// updateCourse("5a68fde3f09ad7646ddec17e");

// UPDATING COURSES


//DELETE COURSE 

// async function deleteCourse(id) {
//   const course = await Course.findOneAndRemove(id);
//   !course ? console.log('Cannot find a course by that ID'): console.log(course);
  
// }
// deleteCourse('5a6900fff467be65019a9001')

//DELETE COURSE 


app.listen(3000, () => {
  console.log("Connected to 3000");
});
