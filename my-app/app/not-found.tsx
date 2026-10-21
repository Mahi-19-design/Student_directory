
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-slate-50 px-4 text-center">

            <h1 className="text-8xl font-bold text-blue-600">
                404
            </h1>

            <h2 className="mt-4 text-2xl font-bold text-slate-900">
                Page Not Found
            </h2>

            <p className="mt-2 max-w-md text-sm text-slate-600">
                Sorry, the page you are looking for does not exist
                or may have been moved.
            </p>

            <Link
                href="/"
                className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
                Go Back Home
            </Link>

        </div>
    );
}
