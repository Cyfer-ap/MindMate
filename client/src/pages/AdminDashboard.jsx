export default function AdminDashboard() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="p-10 text-center">
            <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
            <p>Welcome, {user.name} ({user.email})</p>
        </div>
    );
}
