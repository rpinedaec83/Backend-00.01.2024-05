const mongoose = require('../common/services/mongoose.service').mongoose;

const CourseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    img: { type: String },
    cover: { type: String },
    value: { type: Number, required: true }
});

CourseSchema.statics.createCourse = function(course) {
    return this.create(course);
};

CourseSchema.statics.listCourses = function(limit, page) {
    return this.find().limit(limit).skip(page * limit);
};

CourseSchema.statics.findCourseById = function(id) {
    return this.findById(id);
};

CourseSchema.statics.updateCourseById = function(id, course) {
    return this.findByIdAndUpdate(id, course, { new: true });
};

CourseSchema.statics.deleteCourseById = function(id) {
    return this.findByIdAndRemove(id);
};

module.exports = mongoose.model('Course', CourseSchema);
