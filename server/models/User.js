// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    role: {
        type: String,
        enum: ['student', 'teacher', 'admin'],
        default: 'student',
    }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
