
import Link from "next/link";
import { notFound } from "next/navigation";
import { departments, students } from "@/data/directoryData";

export default async function SpecializationPage({
    params,
}: {
    params: Promise<{ dept: string; spec: string }>;
}) {
    const { dept, spec } = await params;

    const department = departments.find((d) => d.id === dept);

    if (!department) {
        notFound();
    }

    const specialization = department.specializations.find(
        (s) => s.id === spec
    );

    if (!specialization) {
        notFound();
    }

    const trackStudents = students.filter(
        (student) =>
            student.departmentId === dept &&
            student.specializationId === spec
    );
 return (
        <div className="space-y-6">

            <div className="flex items-center gap-2 text-xs text-slate-400">
                <Link href="/departments" className="hover:text-slate-700">
                    Departments
                </Link>
                <span>/</span>
                <Link href={`/departments/${dept}`} className="hover:text-slate-700">
                    {department.name}
                </Link>
                <span>/</span>
                <span className="font-medium text-slate-900">
                    {specialization.name}
                </span>
            </div>

            <div className="flex items-center justify-between text-xs">
                <Link
                    href={`/departments/${dept}`}
                    className="font-medium text-blue-600 hover:text-blue-700"
                >
                    ← Return to {department.name} Department
                </Link>

                <Link
                    href="/students"
                    className="font-medium text-slate-500 hover:text-slate-800"
                >
                    View all students →
                </Link>
            </div>

            <div className="space-y-6 rounded-lg border border-slate-200 bg-white p-8 shadow-sm">

                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold text-slate-900">
                            {specialization.name}
                        </h1>

                        <p className="text-xs text-slate-600">
                            Specialization under {department.name}
                        </p>

                        <p className="text-sm leading-relaxed text-slate-600">
                            {specialization.description}
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-xs font-bold uppercase text-slate-400">
                            Department Track
                        </p>
                        <p className="mt-1 rounded border bg-slate-50 px-3 py-1 font-mono text-xs font-bold text-slate-800">
                            {specialization.code}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 md:grid-cols-4">
                    <div>
                        <p className="text-xs text-slate-400">Academic Lead</p>
                        <p className="mt-1 text-sm font-semibold text-slate-800">
                            {specialization.academicLead}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">Primary Core Lab</p>
                        <p className="mt-1 text-sm font-semibold text-slate-800">
                            {specialization.coreLab}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">Total Enrollment</p>
                        <p className="mt-1 text-sm font-semibold text-slate-800">
                            {trackStudents.length} Active Enrollees
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">Curriculum Cycle</p>
                        <p className="mt-1 text-sm font-semibold text-slate-800">
                            {specialization.curriculumCycle}
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <h2 className="text-base font-bold text-slate-900">
                            Students in this Specialization
                        </h2>

                        <span className="rounded bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-700">
                            {trackStudents.length}
                        </span>
                    </div>

                    <p className="text-xs text-slate-500">
                        Filtered by Track: {specialization.name}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {trackStudents.map((student) => (
                        <div
                            key={student.id}
                            className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-5"
                        >
                            <div className="space-y-3">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-sm font-semibold text-blue-600">
                                            {student.initials}
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-bold text-slate-900">
                                                {student.name}
                                            </h3>

                                            <p className="font-mono text-xs text-slate-400">
                                                {student.id.toUpperCase()}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="rounded border bg-slate-50 px-2 py-1 text-xs text-slate-500">
                                        {student.year}
                                    </span>
                                </div>

                                <p className="text-xs text-slate-600">
                                    {student.tagline}
                                </p>
                            </div>

                            <div className="mt-3 border-t border-slate-100 pt-3">
                                <Link
                                    href={`/students/${student.id}`}
                                    className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                                >
                                    View profile →
                                </Link>
                            </div>
                        </div>
                    ))}

                    {trackStudents.length === 0 && (
                        <p className="text-sm text-slate-500">
                            No students found in this specialization.
                        </p>
                    )}
                </div>
            </div>

            <div className="border-t border-slate-200 pt-6 text-xs text-slate-400">
                Campus Directory Academic Informatics Core
            </div>

        </div>
    );

}
