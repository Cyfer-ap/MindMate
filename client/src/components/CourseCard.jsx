export default function CourseCard({ title, topic, time, progress }) {
    return (
        <div className="flex items-center justify-between py-4 border-b last:border-b-0">
            <div className="flex items-center gap-4">
                <div className="bg-violet-100 p-3 rounded-xl">
                    📘
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800">{title}</h4>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                        {topic} • {time}
                    </p>
                    <div className="w-full bg-gray-200 h-2 rounded mt-2">
                        <div className="h-2 rounded bg-violet-500" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
            <span className="text-sm font-medium text-gray-700">{progress}%</span>
        </div>
    );
}
