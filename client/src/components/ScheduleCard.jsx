export default function ScheduleCard({ title, time, type }) {
    const typeColor = {
        'Live Session': 'text-blue-600',
        'Group Study': 'text-purple-600',
        'Assignment Due': 'text-red-500',
    };

    return (
        <div className="flex items-start gap-4 py-3 border-b last:border-b-0">
            <div className="bg-violet-100 p-3 rounded-xl">
                📅
            </div>
            <div>
                <h4 className="font-semibold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-500">{time}</p>
                <p className={`text-sm font-medium ${typeColor[type]}`}>{type}</p>
            </div>
        </div>
    );
}
