export default function Login() {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Login to MindMate</h2>
                <form className="space-y-4">
                    <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
                    <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
                </form>
                <p className="text-sm mt-4 text-center">Don’t have an account? <a href="/client/src/pages/Register" className="text-blue-500">Register</a></p>
            </div>
        </div>
    )
}

