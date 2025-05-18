import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
                path="/admin-dashboard"
                element={
                    <ProtectedRoute allowedRoles={['admin']}>
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/teacher-dashboard"
                element={
                    <ProtectedRoute allowedRoles={['teacher']}>
                        <TeacherDashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/student-dashboard"
                element={
                    <ProtectedRoute allowedRoles={['student']}>
                        <StudentDashboard />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;
