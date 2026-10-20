// types to be used across the project

export interface Subjects {
    code: String;
    name: String;
    credits: Number

}
export interface Student {
    id: string;
    name: string;
    initials: string;
    departmentId: string;
    departmentName: string;
    year: string;
    studyYear: string;
    status: string;
    email: string;
    enrolled: string;
    tagline: string;
    about: string;
    academicStanding: string;
    specializationId: string;
    systemRecordId: string;
    enrolledSubjects: Subject[];
}

export interface Specialization {
    id: string;
    name: string;
    code: string;
    description: string;
    academicLead: string;
    coreLab: string;
    curriculumCycle: string;
}

export interface Department {
    id: string;
    name: string;
    icon: string;
    description: string;
    specializationsCount: number;
    enrolledCount: number;
    specializations: Specialization[];
}
