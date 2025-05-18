import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

export default function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        role: 'student' // default role
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await axios.post('/auth/register', form);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen font-sans">
            {/* Left: Welcome Panel */}
            <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-[#7F00FF] to-[#E100FF] text-white px-6 animate-fade-in">
                <div className="w-full max-w-md text-center space-y-6 transform scale-110">
                    <h1 className="text-5xl font-extrabold">🎓 Join MindMate</h1>
                    <p className="text-xl">Unlock your personalized learning journey today.</p>
                    <div className="grid grid-cols-2 gap-4 text-base">
                        <div className="bg-white/10 p-5 rounded-xl shadow-lg">
                            <p className="text-3xl font-bold">10K+</p>
                            <p>Learning resources</p>
                        </div>
                        <div className="bg-white/10 p-5 rounded-xl shadow-lg">
                            <p className="text-3xl font-bold">5K+</p>
                            <p>Active students</p>
                        </div>
                        <div className="bg-white/10 p-5 rounded-xl shadow-lg">
                            <p className="text-3xl font-bold">200+</p>
                            <p>Expert instructors</p>
                        </div>
                        <div className="bg-white/10 p-5 rounded-xl shadow-lg">
                            <p className="text-3xl font-bold">98%</p>
                            <p>Success rate</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Register Form */}
            <div className="flex justify-center items-center bg-white p-8 animate-fade-in">
                <div className="w-full max-w-xl space-y-8 scale-[1.1]">
                    <h2 className="text-4xl font-bold text-gray-800 text-center">Create Account</h2>
                    <p className="text-center text-lg text-gray-500">Join MindMate and start learning now</p>

                    {error && (
                        <div className="bg-red-100 text-red-700 text-sm p-3 rounded">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-base font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                className="mt-2 w-full border px-5 py-3 rounded-lg text-lg focus:ring-2 focus:ring-violet-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-base font-medium text-gray-700">Email address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                value={form.email}
                                onChange={handleChange}
                                className="mt-2 w-full border px-5 py-3 rounded-lg text-lg focus:ring-2 focus:ring-violet-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-base font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                value={form.password}
                                onChange={handleChange}
                                className="mt-2 w-full border px-5 py-3 rounded-lg text-lg focus:ring-2 focus:ring-violet-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-base font-medium text-gray-700">Role</label>
                            <select
                                name="role"
                                value={form.role}
                                onChange={handleChange}
                                className="mt-2 w-full border px-5 py-3 rounded-lg text-lg focus:ring-2 focus:ring-violet-500"
                                required
                            >
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
                        >
                            Register
                        </button>
                    </form>

                    <p className="text-base text-center text-gray-600">
                        Already have an account?{' '}
                        <a href="/" className="text-violet-600 font-medium hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
