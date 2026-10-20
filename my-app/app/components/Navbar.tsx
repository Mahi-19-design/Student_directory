"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { label: "Students", href: "/students" },
        { label: "Departments", href: "/departments" },
        { label: "About", href: "/about" },
    ];

    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                <div className="flex items-center gap-8">
                    <Link href="/students" className="flex items-center gap-2">
                        <span className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                            🎓
                        </span>
                        <span className="font-bold text-slate-900 text-lg">Student Directory</span>
                    </Link>


                    <nav className="flex items-center gap-6">
                        {navLinks.map((link) => {
                            const isActive = pathname.startsWith(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium pb-5 pt-5 transition-colors relative ${isActive ? "text-slate-900 font-semibold" : "text-slate-500 hover:text-slate-800"
                                        }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>


                <span className="text-xs font-medium text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1 rounded-md">
                    Frontend Practice
                </span>
            </div>
        </header>
    );
}
