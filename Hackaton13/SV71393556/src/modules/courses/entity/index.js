import mongoose from "../../../config/db/index.js";
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {type: String, required: true},
  description: { type: String },
  image:  { type: String },
  frontPage:  { type: String },
  price:  { type: String }
});

const CourseModel = mongoose.model('Course', CourseSchema);
export default CourseModel;