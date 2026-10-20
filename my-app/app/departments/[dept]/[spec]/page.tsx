// app/departments/[dept]/[spec]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { departments, students } from "@/data/directoryData";

export function generateStaticParams() {
    const params: { dept: string; spec: string }[] = [];
    departments.forEach((dept) => {
        dept.specializations.forEach((spec) => {
            params.push({ dept: dept.id, spec: spec.id });
        });
    });
    return params;
}

interface PageProps {
    params: Promise<{ dept: string; spec: string }>;
}

export default async function SpecializationPage({ params }: PageProps) {
    const { dept, spec } = await params;

    const department = departments.find((d) => d.id === dept);
    const specialization = department?.specializations.find((s) => s.id === spec);

    if (!department || !specialization) {
        notFound();
    }

    // Find students in this track
    const trackStudents = students.filter(
        (s) => s.departmentId === dept && s.specializationId === spec
    );

    return (
        <div className="space-y-6">
            {/* Breadcrumb Bar */}
            <div className="text-xs text-slate-400 flex items-center gap-2">
                <Link href="/departments" className="hover:text-slate-700">
                    Departments
                </Link>
                <span>/</span>
                <Link href={`/departments/${dept}`} className="hover:text-slate-700">
                    {department.name}
                </Link>
                <span>/</span>
                <span className="text-slate-900 font-medium">{specialization.name}</span>
            </div>

            {/* Navigation Return Links */}
            <div className="flex items-center justify-between text-xs">
                <Link
                    href={`/departments/${dept}`}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                >
                    ← Return to {department.name} Department
                </Link>
                <Link
                    href="/students"
                    className="text-slate-500 hover:text-slate-800 font-medium flex items-center gap-1"
                >
                    View all students →
                </Link>
            </div>

            {/* Specialization Hero Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-6 shadow-sm">
                <div className="flex items-start justify-between">
                    <div className="space-y-2 max-w-2xl">
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-bold text-slate-900">{specialization.name}</h1>
                            <span className="text-xs text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                                Specialization under {department.name}
                            </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {specialization.description}
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            Department Track
                        </p>
                        <span className="mt-1 inline-block border border-slate-300 font-mono font-bold text-slate-800 px-2.5 py-1 rounded text-xs bg-slate-50">
                            {specialization.code}
                        </span>
                    </div>
                </div>

                {/* 4 Info Columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                    <div>
                        <p className="text-xs font-medium text-slate-400">Academic Lead</p>
                        <p className="text-sm font-semibold text-slate-800 mt-0.5">
                            {specialization.academicLead}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-slate-400">Primary Core Lab</p>
                        <p className="text-sm font-semibold text-slate-800 mt-0.5">{specialization.coreLab}</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-slate-400">Total Enrollment</p>
                        <p className="text-sm font-semibold text-slate-800 mt-0.5">
                            {trackStudents.length} Active Enrollees
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-slate-400">Curriculum Cycle</p>
                        <p className="text-sm font-semibold text-slate-800 mt-0.5">
                            {specialization.curriculumCycle}
                        </p>
                    </div>
                </div>
            </div>

            {/* Students in Specialization Section */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h2 className="text-base font-bold text-slate-900">
                            Students in this Specialization
                        </h2>
                        <span className="text-xs font-semibold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                            {trackStudents.length}
                        </span>
                    </div>
                    <span className="text-xs text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded">
                        Filtered by Track: <strong className="text-slate-800">{specialization.name}</strong>
                    </span>
                </div>

                {/* 2-Column Student Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {trackStudents.map((student) => (
                        <div
                            key={student.id}
                            className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between"
                        >
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 font-semibold text-sm flex items-center justify-center">
                                            {student.initials}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-900">{student.name}</h3>
                                            <p className="text-xs text-slate-400 font-mono">
                                                {student.id.toUpperCase()}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                                        {student.year}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-600">{student.tagline}</p>
                            </div>

                            <div className="pt-3 mt-3 border-t border-slate-100">
                                <Link
                                    href={`/students/${student.id}`}
                                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                                >
                                    View profile →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-6 border-t border-slate-200">
                <span>Campus Directory © Academic Informatics Core</span>
                <span className="flex items-center gap-1.5 font-mono">
                    Path: /departments/{dept}/{spec}
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </span>
            </div>
        </div>
    );
}
