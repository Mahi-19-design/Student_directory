// app/students/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { students, departments } from "@/data/directoryData";

export default function StudentsPage() {
    const [search, setSearch] = useState("");
    const [selectedDept, setSelectedDept] = useState("all");

    // Filter students based on search query and selected department
    const filteredStudents = students.filter((student) => {
        const matchesSearch =
            student.name.toLowerCase().includes(search.toLowerCase()) ||
            student.id.toLowerCase().includes(search.toLowerCase());

        const matchesDept =
            selectedDept === "all" || student.departmentId === selectedDept;

        return matchesSearch && matchesDept;
    });

    return (
        <div className="space-y-6">
            {/* Page Title */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Students</h1>
                <p className="text-sm text-slate-500">Browse students and view their profiles.</p>
            </div>

            {/* Filter Bar */}
            <div className="bg-white border border-slate-200 rounded-lg p-3 flex flex-col sm:flex-row gap-4 items-center justify-between">
                {/* Search Input */}
                <div className="relative w-full sm:w-80">
                    <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 text-sm">
                        🔍
                    </span>
                    <input
                        type="text"
                        placeholder="Search students"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-3 py-1.5 text-sm border border-slate-200 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* Department Dropdown */}
                <div className="flex items-center gap-2 text-sm text-slate-600 w-full sm:w-auto">
                    <span>Department:</span>
                    <select
                        value={selectedDept}
                        onChange={(e) => setSelectedDept(e.target.value)}
                        className="border border-slate-200 bg-white rounded-md px-3 py-1.5 text-sm text-slate-700 focus:outline-none focus:border-blue-500"
                    >
                        <option value="all">All departments</option>
                        {departments.map((dept) => (
                            <option key={dept.id} value={dept.id}>
                                {dept.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Students Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredStudents.map((student) => (
                    <div
                        key={student.id}
                        className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:shadow-sm transition"
                    >
                        <div className="space-y-3">
                            {/* Avatar and ID badge */}
                            <div className="flex items-center justify-between">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 font-semibold text-sm flex items-center justify-center">
                                    {student.initials}
                                </div>
                                <span className="text-xs font-mono font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                                    {student.id.toUpperCase()}
                                </span>
                            </div>

                            {/* Name */}
                            <h2 className="text-base font-semibold text-slate-900">{student.name}</h2>

                            {/* Department pill & Year */}
                            <div className="flex items-center gap-2 text-xs">
                                <span className="text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-medium">
                                    {student.departmentName}
                                </span>
                                <span className="text-slate-500">{student.year}</span>
                            </div>
                        </div>

                        {/* Profile Link */}
                        <div className="pt-4 mt-4 border-t border-slate-100">
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

            {/* Pagination Footer */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <p>
                    Showing <span className="font-medium text-slate-800">{filteredStudents.length}</span> of{" "}
                    <span className="font-medium text-slate-800">{students.length}</span> students
                </p>
                <div className="flex gap-2">
                    <button
                        disabled
                        className="px-3 py-1.5 border border-slate-200 rounded bg-white text-slate-400 cursor-not-allowed"
                    >
                        Previous
                    </button>
                    <button
                        disabled
                        className="px-3 py-1.5 border border-slate-200 rounded bg-white text-slate-400 cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
