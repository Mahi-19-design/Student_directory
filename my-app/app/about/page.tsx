// app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-6">
      {/* Breadcrumb */}
      <div className="text-xs text-slate-400 flex items-center gap-2">
        <Link href="/students" className="hover:text-slate-700">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">About</span>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-slate-900">About Campus Directory</h1>
        <p className="text-sm text-slate-500">Academic Informatics & Directory Services</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4 text-sm text-slate-600 leading-relaxed shadow-sm">
        <p>
          The Campus Directory is an integrated academic portal designed to provide clear, real-time visibility into academic faculties, specialized department tracks, and enrolled student profiles.
        </p>
        <p>
          Built with the Next.js App Router, this project showcases core architectural patterns including:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li><strong>Shared Layouts:</strong> Persistent header and breadcrumb navigation across all views.</li>
          <li><strong>Dynamic Routes (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs">[id]</code>):</strong> Individual student dossiers with academic records and course lists.</li>
          <li><strong>Nested Dynamic Routing (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs">[dept]/[spec]</code>):</strong> Department track breakdowns with filtered student rosters.</li>
          <li><strong>Client-Side State:</strong> Real-time student search and dynamic department filtering.</li>
          <li><strong>Custom 404 Boundaries:</strong> Intelligent fallback pages with suggested starting points.</li>
        </ul>
      </div>

      <div className="pt-4 border-t border-slate-200 flex justify-between text-xs text-slate-400">
        <span>Campus Directory © Academic Informatics Core</span>
        <span>Version 1.0.0</span>
      </div>
    </div>
  );
}
