import Sidebar from './Sidebar';
import Navbar from './Navbar';
import CourseCard from './CourseCard';
import ScheduleCard from './ScheduleCard';

export default function Dashboard() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <Navbar />

                <main className="p-6 space-y-6 overflow-y-auto">
                    {/* Welcome */}
                    <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-6 text-white shadow">
                        <h2 className="text-2xl font-bold">Welcome back, John! 👋</h2>
                        <p className="mt-1">Ready to continue your learning journey?</p>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-white/10 p-4 rounded-lg">
                                <p className="text-xl font-semibold">85%</p>
                                <p className="text-sm">Weekly Progress</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg">
                                <p className="text-xl font-semibold">12.5h</p>
                                <p className="text-sm">Study Time</p>
                            </div>
                        </div>
                    </div>

                    {/* Learning Streak & Study Groups */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl shadow">
                            <p className="text-sm text-gray-500">Learning Streak</p>
                            <p className="text-2xl font-bold mt-1">15 Days</p>
                            <div className="w-full h-2 bg-gray-200 rounded mt-2">
                                <div className="h-full bg-green-500 rounded" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow">
                            <p className="text-sm text-gray-500">Study Groups</p>
                            <p className="text-2xl font-bold mt-1">3 Active</p>
                            <a href="#" className="text-violet-600 mt-2 block text-sm font-medium">View all groups →</a>
                        </div>
                    </div>

                    {/* Current Courses */}
                    <div className="bg-white p-6 rounded-2xl shadow">
                        <h3 className="text-lg font-bold mb-4">Current Courses</h3>
                        {/* Add CourseCard components here */}
                    </div>

                    {/* Today's Schedule */}
                    <div className="bg-white p-6 rounded-2xl shadow">
                        <h3 className="text-lg font-bold mb-4">Today's Schedule</h3>
                        {/* Add ScheduleCard components here */}
                    </div>
                </main>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-lg font-bold mb-4">Current Courses</h3>
                <CourseCard title="Introduction to Psychology" topic="Cognitive Development" time="45 minutes" progress={75} />
                <CourseCard title="Advanced Mathematics" topic="Linear Algebra" time="1.5 hours" progress={40} />
                <CourseCard title="Digital Marketing Basics" topic="Social Media Strategy" time="20 minutes" progress={90} />
            </div>

            {/* Today's Schedule */}
            <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-lg font-bold mb-4">Today's Schedule</h3>
                <ScheduleCard title="Psychology Class" time="10:00 AM" type="Live Session" />
                <ScheduleCard title="Math Tutorial" time="2:00 PM" type="Group Study" />
                <ScheduleCard title="Marketing Project" time="4:30 PM" type="Assignment Due" />
            </div>
        </div>
    );
}
