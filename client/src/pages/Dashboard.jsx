import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
    const { user, logout } = useAuth()

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Welcome, {user?.name}</h1>
            <p className="mb-2">Email: {user?.email}</p>
            <p className="mb-6">Role: {user?.role}</p>
            <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
                Logout
            </button>
        </div>
    )
}
