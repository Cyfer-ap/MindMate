export default function Register() {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Register for MindMate</h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
                    <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
                    <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
                </form>
                <p className="text-sm mt-4 text-center">Already have an account? <a href="/" className="text-blue-500">Login</a></p>
            </div>
        </div>
    )
}
