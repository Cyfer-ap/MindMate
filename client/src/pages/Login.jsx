import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await axios.post('/auth/login', form);
            const { token, user } = res.data;

            // Save only token locally
            localStorage.setItem('token', token);

            // Navigate based on role
            switch (user.role) {
                case 'admin':
                    navigate('/admin-dashboard');
                    break;
                case 'teacher':
                    navigate('/teacher-dashboard');
                    break;
                case 'student':
                    navigate('/student-dashboard');
                    break;
                default:
                    navigate('/');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen font-sans">
            {/* Left: Welcome Panel */}
            <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-[#7F00FF] to-[#E100FF] text-white px-6 animate-fade-in">
                <div className="w-full max-w-md text-center space-y-6 transform scale-110">
                    <h1 className="text-5xl font-extrabold">👋 Welcome back!</h1>
                    <p className="text-xl">Your personalized learning journey continues here.</p>

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

            {/* Right: Login Form */}
            <div className="flex justify-center items-center bg-white p-8 animate-fade-in">
                <div className="w-full max-w-xl space-y-8 scale-[1.1]">
                    <h2 className="text-4xl font-bold text-gray-800 text-center">Sign In</h2>
                    <p className="text-center text-lg text-gray-500">Access your MindMate account</p>

                    {error && (
                        <div className="bg-red-100 text-red-700 text-sm p-3 rounded">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
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

                        <div className="flex items-center justify-between text-sm">
                            <label className="text-black flex items-center gap-2">
                                <input type="checkbox" className="form-checkbox" />
                                Remember me
                            </label>
                            <a href="#" className="text-violet-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
                        >
                            Sign in
                        </button>
                    </form>

                    <p className="text-base text-center text-gray-600">
                        Don’t have an account?{' '}
                        <a href="/register" className="text-violet-600 font-medium hover:underline">
                            Sign up for free
                        </a>
                    </p>

                    <div className="text-center text-gray-400 text-sm">Or continue with</div>
                    <div className="flex gap-4">
                        <button className="w-full border py-3 rounded-lg flex items-center justify-center gap-3 text-lg font-medium hover:shadow-md transition">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                            Google
                        </button>
                        <button className="w-full border py-3 rounded-lg flex items-center justify-center gap-3 text-lg font-medium hover:shadow-md transition">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8ODw0ODQ0NDRAQDQ8ODg0NDxAPDhAQFhEWFxURFRUZHSggGBslGxUTITEhJSorLi4uFx8zODMvNygtMC0BCgoKDQ0ODgcNDisZHxkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOkA2AMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQgGBwIDBQT/xABCEAACAgECAwUDCAYIBwAAAAAAAQIDBAUREiExBgdBUWETInEUIzJCUoGRoQhTYnKCkhUkY6KxssHhM3OTo7PC8f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDRwAAAAAAAAAAAAAAAAAAAAAAfVh6bkX/8DHvv/wCTVOz/ACoD5QTOLTaaaabTTWzT8UyAIAAAAAAAAAAEgAAAAAAAAAAAAAAAAAAZ52E7rc7VlG+f9TxHs1kWxblYv7KvrL4vZerMm7n+7COVGvUtTrbob4sXEmtlevC2xfq/JfW69Ou+ktkkkkktklySXkgMP7N92WkaeouGJDJtWzeRmJXT4l0kov3Y/ckZjWktlFKKXRRSSX3A+PWdQjiYuVlT+jRj23P14Yt7fkBULtRJSz9Qa6PNyWvg7pHlnKc3JuUnu5NybfVtvds4gQAAAAAAAAAAJAAAAAAAAAAAAAAAAM47pOx39L569sm8XG4bsnynz9yn+Jp7+kZeOxg5aXuc0BYOkYza2ty18stfj76Xs4/dBQ5ebYGbpJJJJJJJJLkkvBJEgAQap/SB7SrHwq9Nrl87lyU7Unzjjwlvz8uKaS+EZGxe0WuUabi3ZmVLhrrjuorbjsn9WuC8ZN8v9ipXarX7tTzL83Ifv2S92Cbca61yjXH0S/Hm/EDyQABAAAAAAAAAAAkAAAAAAAAA9LR9AzM6XDh4mRk89m6q5ShF/tS6R+9geaDYOF3Na5at5Y9OP6XZFe/x2g5H03dyGsxW6+RWP7ML2pf3opfmBrUGQa32J1TATll6fkVwSblbGKtqivNzg3FfiY+B24tDssrrXJznGCfrJpf6l1a6lCMYRW0YRjCK8klsileFkeytqtS4vZ2Qs4em/DJPb8je9vf7ibbw03JlLbpK2uMd/ik/8ANwHidq+1eFpNLuzblFtN1UQ2lfc14Qhvz8Ob2S35tGkNe78tSvThh00YEWvpr5+5fCUlw/3TW+Rfk5tznZO/LvsfWTnbbN+Xi38APf7f8AbnJ1q9Tt+aorb+T4sXvCtP60n9ab8X+GxiplmB3aa3kRUq9MyIp/rnXjv8LJRZ6ku5rXEt/ktLf2Vk07/m9gNfgyrUe7jWsZOVul5LS6ulQyP/E5GMXVShJwnGUJRe0oTTjJPyafQDrAAAAAAAAAAEgAAAAB6Og6Hk6hfDGw6ZXWy57R5RjHxnKXSMV5s+jsl2byNVy68TFXvS96yx/QqrTXFZL0W6+LaXiWo7IdlcXSMdY+JDm9ndfJL2t019aT/HZdEBhPYvuYwsRQt1Lhz8jZN1c1iVvyUetnxly9DZ9FUa4xrrhGuEVtGFcVGEV5JLkjmQBIIAE7mJdpu7jSdS4pXYsaLXv/AFnE2ps3fjJJcM3+8mZYAK+doO4vPqcpYGRTmw5tQsfsL/Rc94v47r4Hjaf3N65bLaeNTir7d+RU4/8Abcn+RZwAal7O9xeFTtPUcm3Nl+qp3opXo2m5y+KcfgbL0fRMTBjwYWJRjRfX2NcYyl6yl1k/Vn3gCSAAJ3PK17s5g6jDgzsSnIWzSnKO1sV+zYtpR+5nqgDQXbruUuoU8jSJTyq1vKWJZs8mK/s30sXpyf7zNQTg4txknFptNNbNNdU0XcNX97ndpDUIWZ+BWo5sI8VtUFssqK68v1iXR+PR+GwVxBMltunya6pkAAAAAAEgAATGLbSSbbeyS5tvyRBsPuP7OfLtUhdZHipworJnut07d9qo/wA3vfwMDc/dZ2Njo+DCM4r5XkKNuXPxT+rTv5RT2+O78TMgGAIAAAAASQAJBAAkgAASQSAAAEmL9ue3eHote98va5E4704lbXtJ/tSf1I7/AFn5PZM6+8ftpVouI7fdsybd4YlDf0peNkvHgjum/PdLx3Kr6nqF2Xdbk5NsrrrZOdlk3zk/9ElsklySSS5Ad/aHVXm5eTluqqh32ytdVKari31238X1b8W2zzgAAAAAACQAALIfo/6T7DSZZLXv5mTOae2z9lX83FfzKx/xFby4HYXD9hpWl1bJOODjuSX25VqUvzbA9whksgAAAAAAAAAAAABxcgOQBIAiU1FSlJqMYpylJ8kklu2zkYR3zau8TRcvhfDPJcMOHqrH84v+mrAK+94PaierahflSb9km6sWD5KFEW+Hl5vnJ+smY0SQAAAAAAAABIAAF1NPgo048V0VFaX3QRSsurgS4qaJedNb/GCA7yCSAAAA4ylscYz+85Sj4kKHQBxhz/8Ao4PIOHqAcyVIhw6/EOHXn1YDj6cv9zi9n6dTm49PQcH+DAhWehLmOD/DYOsDmmai/SRvawtOq8JZdlj+MK9l/nZtxJ79eW3Q1L+kfj74GBb4QzJVt/v1Sf8A6AV+ZBJAAAAAAAAAEgAAXE7G5PttM0y19Z4GNKX73so7/nuU7LR9yuf7fQ8Nb7yoldjy9OGxuK/klADOSCSAAAAAAAAAAAAEkEgCSABJiXetozztGzqoLisrgsmpbbtyqfE0l5uKmvvMtAFIiDNu9fsfLSc+xQhtiZEpXYkl9FJveVPo4t7beTi/EwkAAAAAAAACQAAN4/o36r7uo4MmuTry614vdezsf5VfiaNMv7qNb+QaxhWye1ds/kt3lwW+6m/RS4JfwgWuIZLQYEAAAAAAAAAAASQAJAAAAAeR2s7N42rYs8TKj7r96uyO3HTYk+GyL8+b+KbRVntl2Ry9IyHRlQ917unIin7K6H2ovz6bx6r8N7fHxaxpOPnUzxsymF9M1zhNdH9qLXOMl4NbNAUuBsnvZ7uKtGVWTjZLnTfc64Y9q+eg+Fy3UlynFbbeDW669TWwAAAAABIIJAgAAW57u+0K1PTMTKb3tUPY5Hmrq/dk35b8pfCSMkK7dwfar5Jmy0+6W1Obsq93yhkxXu/zLePq+AsSBAJIAAAAAAAAAAAAAAJBAAkkg8Dt32lhpOn5GZJrj4fZ40H9e+SfBHbxS2cn6RYGjO/ntEszU/k1ct6sGDp3WzTvls7WvhtCPxgzWh2XXSslOdknOc5SnOcnvKUm922/FtnWAAAAAAAAAAAHOqyUJRlCThKLUoyi2pRknummuj3LYd2va2OsYFd7a+UVbU5cFy2tS+ml9mS5r714FTDKe7rtfZo2bDIXFKie1WVSn9Opv6SXTij1X3ro2BbQg6sPKrvrrvonG2q2EbK7IveMotbpo7gIAAAAAAAAAAAAACSCQCKyd8nbX+lc32OPPiw8RyrpcXvG2x/Tu9Vy2Xot/rM2J34dvPkdT0vDs2yb4f1myL500SX0N/Cc1+EfimV5AAAAAAAAAAAAAAAAA2p3Nd4q0+S0/Onth2z3qtk+WNbLrv5VyfXyfPxZYjyae6fNNdGikZszu472b9MjDEzYzy8NcobNe3x15Q35Sj+y2tvBroBZEg8TQu1+m6hFSxM6iba39lKaruXxrltL8tj1MrOopi53ZNFUVzcrbYQivvbA7wYJ2g729Hw1JQvedYuleIuOG/ra9obfBt+hqvtD32apktxxFVp1flWldc15Oya2/CKAshwsnhZTfM7S6he27tQzbd3u+PItkvuW+yOnH1zMqe9Wbl1vzrvti/yYFzdiCsOgd72sYbip5Cza1snXmR43t4/OLae/q2/gbY7Md8ul5nDDKctOuey2u9+hv0tS5L95RA2MDpw8unIip499N8Gt1OmyNkWvjFk5mVVRF2ZF1VEEt3O2ca4perb2A7jD+8nt1TouM9nGzMti/k1D57eHtrF4QT/FrZeLWO9tu+fDxIzq0vhzsjmlds1i1vz362fCPL1NAatql+ZdZkZV077rHvOyb5v0S6JLwS5IDrz8y3ItsvvslbbbN2WWSe8pSb3bZ84AAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMZNPdNp+DXJkzm5PeTcn5tts4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=" alt="Apple" className="w-5 h-5" />
                            Apple
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
