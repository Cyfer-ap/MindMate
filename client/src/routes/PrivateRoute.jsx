import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function PrivateRoute({ children }) {
    const { isAuthenticated, loading } = useAuth()

    if (loading) return <div className="text-center mt-20 text-xl font-semibold">Loading...</div>

    return isAuthenticated ? children : <Navigate to="/" />
}
