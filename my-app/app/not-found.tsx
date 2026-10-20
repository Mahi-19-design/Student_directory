// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-8 py-6">
      {/* Breadcrumb */}
      <div className="text-xs text-slate-400 flex items-center gap-2">
        <span>Directory</span>
        <span>/</span>
        <span className="text-slate-700 font-medium">Not Found</span>
      </div>

      {/* Centered Message */}
      <div className="text-center max-w-lg mx-auto space-y-4 py-8">
        <span className="inline-block text-xs font-mono font-medium text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
          • 404 · ROUTE NOT FOUND
        </span>

        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Student or department not found
        </h1>

        <p className="text-sm text-slate-500 leading-relaxed">
          The requested directory entry or path could not be located. It may have moved or the identifier might be invalid.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <Link
            href="/students"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-md transition shadow-sm"
          >
            Return to Students Directory
          </Link>
          <Link
            href="/departments"
            className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-md transition"
          >
            Browse All Departments
          </Link>
        </div>
      </div>

      {/* Suggested Starting Points */}
      <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
          <span className="font-bold text-slate-500 uppercase tracking-wider">
            Suggested Starting Points
          </span>
          <span className="text-slate-400">Internal Routes</span>
        </div>
        <div className="divide-y divide-slate-100 text-xs">
          <Link
            href="/departments/computer-science/web-development"
            className="px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition text-slate-700"
          >
            <span className="font-medium">🏛 Computer Science Department</span>
            <span className="font-mono text-slate-400">/departments/cs →</span>
          </Link>
          <Link
            href="/students"
            className="px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition text-slate-700"
          >
            <span className="font-medium">🎓 Enrolled Students Directory</span>
            <span className="font-mono text-slate-400">/students →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
