export default function Sidebar() {
    const items = [
        { name: 'Dashboard', icon: 'grid' },
        { name: 'My Courses', icon: 'book' },
        { name: 'Schedule', icon: 'calendar' },
        { name: 'Messages', icon: 'chat' },
        { name: 'Settings', icon: 'cog' },
        { name: 'Help Center', icon: 'help-circle' },
    ];

    return (
        <aside className="w-64 bg-white border-r p-4 hidden lg:flex flex-col justify-between">
            <div>
                <div className="text-2xl font-bold text-purple-700 flex items-center gap-2 mb-8">
                    📘 MindMate
                </div>
                <ul className="space-y-2">
                    {items.map((item) => (
                        <li key={item.name}>
                            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100 font-medium text-gray-700">
                                <span className="mr-3">📚</span> {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500">
                🚪 Sign Out
            </a>
        </aside>
    );
}
