import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "@/data/directoryData";

export function generateStaticParams() {
    return students.map((student) => ({
        id: student.id,
    }));
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function StudentDetailPage({ params }: PageProps) {
    const { id } = await params;
    const student = students.find((s) => s.id.toLowerCase() === id.toLowerCase());

    if (!student) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <div className="text-xs text-slate-400 flex items-center gap-2">
                    <Link href="/students" className="hover:text-slate-700">
                        Students
                    </Link>
                    <span>/</span>
                    <span className="text-slate-700 font-medium">{student.name}</span>
                </div>
                <div>
                    <Link
                        href="/students"
                        className="text-xs text-slate-600 hover:text-slate-900 inline-flex items-center gap-1"
                    >
                        ← Back to students
                    </Link>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 font-bold text-xl flex items-center justify-center">
                        {student.initials}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">{student.name}</h1>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-mono font-medium text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                                {student.id.toUpperCase()}
                            </span>
                            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                                {student.status}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8 pt-4 border-t border-slate-100">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Department</p>
                        <p className="text-sm font-semibold text-slate-800 mt-0.5">{student.departmentName}</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Study Year</p>
                        <p className="text-sm font-semibold text-slate-800 mt-0.5">{student.studyYear}</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</p>
                        <a
                            href={`mailto:${student.email}`}
                            className="text-sm font-semibold text-blue-600 hover:underline mt-0.5 inline-block"
                        >
                            {student.email}
                        </a>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Enrolled</p>
                        <p className="text-sm font-semibold text-slate-800 mt-0.5">{student.enrolled}</p>
                    </div>
                </div>

           
                <div className="pt-4 border-t border-slate-100 space-y-2">
                    <h2 className="text-sm font-bold text-slate-900">About</h2>
                    <p className="text-sm text-slate-600 leading-relaxed">{student.about}</p>
                </div>

            
                <div className="pt-4 border-t border-slate-100 space-y-4">
                    <h2 className="text-sm font-bold text-slate-900">Academic Details</h2>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-1 border-b border-slate-100">
                            <span className="text-slate-500">Department</span>
                            <span className="font-semibold text-slate-800">{student.departmentName}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-100">
                            <span className="text-slate-500">Current Academic Standing</span>
                            <span className="font-semibold text-slate-800">{student.academicStanding}</span>
                        </div>
                    </div>

               
                    <div className="space-y-2 pt-2">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            Enrolled Subjects
                        </p>
                        <div className="border border-slate-200 rounded-md divide-y divide-slate-100 overflow-hidden">
                            {student.enrolledSubjects.map((subject) => (
                                <div
                                    key={subject.code}
                                    className="px-4 py-2.5 flex items-center justify-between text-xs bg-slate-50/50"
                                >
                                    <span className="font-medium text-slate-800">
                                        <span className="font-semibold text-slate-900 mr-2">{subject.code}:</span>
                                        {subject.name}
                                    </span>
                                    <span className="text-slate-500 font-medium">{subject.credits.toFixed(1)} Credits</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
