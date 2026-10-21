
import Link from "next/link";
import { notFound } from "next/navigation";
import { departments, students } from "@/data/directoryData";

export default async function DepartmentDetailPage({
    params,
}: {
    params: Promise<{ dept: string }>;
}) {
    const { dept } = await params;

    const department = departments.find((d) => d.id === dept);

    if (!department) {
        notFound();
    }

    const deptStudents = students.filter(
        (student) => student.departmentId === dept
    );

    return (
        <div className="space-y-6">

            <div className="flex items-center gap-2 text-xs text-slate-400">
                <Link
                    href="/departments"
                    className="hover:text-slate-700"
                >
                    Departments
                </Link>

                <span>/</span>

                <span className="font-medium text-slate-900">
                    {department.name}
                </span>
            </div>

         
            <div className="flex items-center justify-between text-xs">
                <Link
                    href="/departments"
                    className="flex items-center gap-1 font-medium text-blue-600 hover:text-blue-700"
                >
                    ← Return to All Departments
                </Link>

                <Link
                    href="/students"
                    className="flex items-center gap-1 font-medium text-slate-500 hover:text-slate-800"
                >
                    View all students →
                </Link>
            </div>

   
            <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-8 shadow-sm">

                <div className="flex items-center gap-3">

                    <h1 className="text-2xl font-bold text-slate-900">
                        {department.name}
                    </h1>
                </div>

                <p className="text-sm leading-relaxed text-slate-600">
                    {department.description}
                </p>

                <div className="flex items-center gap-4 border-t border-slate-100 pt-2 text-xs text-slate-500">
                    <span>
                        {department.specializationsCount} Specializations
                    </span>
                </div>
            </div>

       
            <div className="space-y-3">
                <h2 className="text-base font-bold text-slate-900">
                    Academic Specializations
                </h2>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {department.specializations.map((spec) => (
                        <Link
                            key={spec.id}
                            href={`/departments/${department.id}/${spec.id}`}
                            className="block rounded-lg border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-sm"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <h3 className="text-sm font-bold text-slate-900">
                                    {spec.name}
                                </h3>

                                <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-500">
                                    {spec.code}
                                </span>
                            </div>

                            <p className="mt-2 line-clamp-2 text-xs text-slate-600">
                                {spec.description}
                            </p>

                            <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-600">
                                View track details & students →
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

        
            <div className="space-y-3 pt-4">
                <h2 className="text-base font-bold text-slate-900">
                    Students in {department.name} ({deptStudents.length})
                </h2>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {deptStudents.map((student) => (
                        <div
                            key={student.id}
                            className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-4"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded bg-blue-100 text-xs font-semibold text-blue-600">
                                    {student.initials}
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-slate-900">
                                        {student.name}
                                    </h3>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
