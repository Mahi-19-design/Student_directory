// app/departments/page.tsx
import Link from "next/link";
import { departments } from "@/data/directoryData";

export default function DepartmentsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Departments</h1>
                    <p className="text-sm text-slate-500">
                        Explore academic faculties, programs, and enrolled students.
                    </p>
                </div>
                <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    {departments.length} Active Academic Faculties
                </span>
            </div>

            {/* Departments List Cards */}
            <div className="bg-white border border-slate-200 rounded-lg divide-y divide-slate-200">
                {departments.map((dept) => (
                    <div key={dept.id} className="p-6 flex items-center justify-between">
                        <div className="space-y-2 max-w-2xl">
                            <div className="flex items-center gap-2.5">
                                <span className="w-7 h-7 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold border border-blue-100">
                                    {dept.icon === "code" ? "</>" : dept.icon === "pen" ? "✎" : "📈"}
                                </span>
                                <h2 className="text-lg font-bold text-slate-900">{dept.name}</h2>
                            </div>
                            <p className="text-sm text-slate-600">{dept.description}</p>
                            <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                                <span>🏛 {dept.specializationsCount} Specializations</span>
                                <span>•</span>
                                <span>👥 {dept.enrolledCount} Enrolled Students</span>
                            </div>
                        </div>

                        <Link
                            href={`/departments/${dept.id}/web-development`}
                            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 whitespace-nowrap"
                        >
                            View students →
                        </Link>
                    </div>
                ))}
            </div>

            {/* Footer info */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-200">
                <span>Curriculum Year 2024–2025</span>
                <span>Updated daily via Campus Records API</span>
            </div>
        </div>
    );
}
