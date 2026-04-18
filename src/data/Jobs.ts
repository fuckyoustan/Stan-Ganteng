interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

const workExperience: WorkExperience[] = [
    {
        title: "Independent System Developer",
        startDate: "2025-06-01",
        company: "Self Employed",
        location: "Indonesia",
        description: "Specializing in Android system level optimization and automation scripts.",
        goals: [
            "Optimizing system network protocols to enhance connectivity and reduce latency.",
            "Implementing advanced thermal management algorithms for mobile hardware.",
            "Designing modern, responsive Web-based User Interfaces for system configurations.",
        ],
        currentJob: true,
    },
    {
        title: "Open Source Contributor",
        startDate: "2024-01-01",
        endDate: "2025-05-30",
        company: "Android Community",
        location: "Remote",
        description: "Collaborated on various projects focused on kernel-level tweaks and system performance.",
        goals: [
            "Researched and applied kernel parameter tuning for better power efficiency.",
            "Developed shell scripts to automate repetitive system maintenance tasks.",
            "Collaborated with global developers to troubleshoot and patch system-level bugs.",
        ],
        currentJob: false,
    },
];

export default workExperience;