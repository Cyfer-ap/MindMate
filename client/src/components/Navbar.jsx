export default function Navbar() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
            <input
                type="text"
                placeholder="Search courses, resources..."
                className="border px-4 py-2 rounded-lg w-full max-w-md"
            />
            <div className="flex items-center gap-4">
        <span className="relative">
          🔔
          <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full"></span>
        </span>
                <div className="flex items-center gap-2">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center">JD</div>
                    <div className="text-sm">
                        <p className="font-bold">John Doe</p>
                        <p className="text-gray-500">Student</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
