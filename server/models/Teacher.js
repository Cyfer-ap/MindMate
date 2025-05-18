const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: 'teacher' }
}, { timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema);
