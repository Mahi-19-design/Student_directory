// app/departments/[dept]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { departments, students } from "@/data/directoryData";

export function generateStaticParams() {
  return departments.map((dept) => ({
    dept: dept.id,
  }));
}

interface PageProps {
  params: Promise<{ dept: string }>;
}

export default async function DepartmentDetailPage({ params }: PageProps) {
  const { dept } = await params;
  const department = departments.find((d) => d.id === dept);

  if (!department) {
    notFound();
  }

  const deptStudents = students.filter((s) => s.departmentId === dept);

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="text-xs text-slate-400 flex items-center gap-2">
        <Link href="/departments" className="hover:text-slate-700">
          Departments
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">{department.name}</span>
      </div>

      {/* Navigation Return Links */}
      <div className="flex items-center justify-between text-xs">
        <Link
          href="/departments"
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
        >
          ← Return to All Departments
        </Link>
        <Link
          href="/students"
          className="text-slate-500 hover:text-slate-800 font-medium flex items-center gap-1"
        >
          View all students →
        </Link>
      </div>

      {/* Department Hero Card */}
      <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-4 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold border border-blue-100">
            {department.icon === "code" ? "</>" : department.icon === "pen" ? "✎" : "📈"}
          </span>
          <h1 className="text-2xl font-bold text-slate-900">{department.name}</h1>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">{department.description}</p>
        <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span>🏛 {department.specializationsCount} Specializations</span>
          <span>•</span>
          <span>👥 {department.enrolledCount} Enrolled Students</span>
        </div>
      </div>

      {/* Specializations List */}
      <div className="space-y-3">
        <h2 className="text-base font-bold text-slate-900">Academic Specializations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {department.specializations.map((spec) => (
            <Link
              key={spec.id}
              href={`/departments/${department.id}/${spec.id}`}
              className="bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-sm transition block"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">{spec.name}</h3>
                <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {spec.code}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-2 line-clamp-2">{spec.description}</p>
              <p className="text-xs font-semibold text-blue-600 mt-3 flex items-center gap-1">
                View track details & students →
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Enrolled Students in this Department */}
      <div className="space-y-3 pt-4">
        <h2 className="text-base font-bold text-slate-900">
          Students in {department.name} ({deptStudents.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deptStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white border border-slate-200 rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-blue-100 text-blue-600 font-semibold text-xs flex items-center justify-center">
                  {student.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{student.name}</h3>
                  <p className="text-xs text-slate-500">{student.year} • {student.tagline}</p>
                </div>
              </div>
              <Link
                href={`/students/${student.id}`}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                Profile →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
