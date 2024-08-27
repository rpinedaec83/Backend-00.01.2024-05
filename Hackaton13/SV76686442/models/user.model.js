const mongoose = require('../common/services/mongoose.service').mongoose;


const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    permissionLevel: { type: Number, required: true },
    firstName: { type: String },
    lastName: { type: String }
});

UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
UserSchema.set('toJSON', {
    virtuals: true
});


UserSchema.statics.createUser = function(user) {
    return this.create(user);
};

UserSchema.statics.listUsers = function(limit, page) {
    return this.find().limit(limit).skip(page * limit);
};

UserSchema.statics.findUserById = function(id) {
    return this.findById(id);
};

UserSchema.statics.updateUserById = function(id, user) {
    return this.findByIdAndUpdate({_id:id}, user);
};

UserSchema.statics.deleteUserById = function(id) {
    return this.findByIdAndRemove(id);
};


UserSchema.statics.findByEmail =function (email)  {
    return this.find({email:email});
};

module.exports = mongoose.model('User', UserSchema);
