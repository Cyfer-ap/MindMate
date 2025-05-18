const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Role-based models
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const Admin = require('../models/Admin');

// Helper to select model by role
const getModelByRole = (role) => {
    switch (role) {
        case 'student': return Student;
        case 'teacher': return Teacher;
        case 'admin': return Admin;
        default: return null;
    }
};

exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const Model = getModelByRole(role);
        if (!Model) return res.status(400).json({ message: 'Invalid role' });

        const existing = await Model.findOne({ email });
        if (existing) return res.status(400).json({ message: 'Email already in use' });

        const hashed = await bcrypt.hash(password, 10);
        const user = new Model({ name, email, password: hashed, role });
        await user.save();

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // List of roles and their corresponding models
        const roles = [
            { model: require('../models/Student'), role: 'student' },
            { model: require('../models/Teacher'), role: 'teacher' },
            { model: require('../models/Admin'), role: 'admin' }
        ];

        let user = null;
        let userRole = null;

        // Check all collections
        for (const { model, role } of roles) {
            user = await model.findOne({ email });
            if (user) {
                userRole = role;
                break;
            }
        }

        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: userRole }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: userRole
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Login failed' });
    }
};

