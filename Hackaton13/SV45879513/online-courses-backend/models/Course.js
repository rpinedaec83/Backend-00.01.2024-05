const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  title: String,
  description: String,
  img: String,
  cover: String,
  price: Number,
});

module.exports = mongoose.model('Course', CourseSchema);
