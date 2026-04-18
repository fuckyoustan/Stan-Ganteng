interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const education: Education[] = [
    {
        title: "Islamic Religious Education",
        startDate: "2022-09-01", 
        school: "Nahdlatul Ulama Islamic University",
        location: "Jepara, Indonesia",
        description: "Focusing on religious studies and education while actively pursuing self taught software development and system level Android optimization.",
        currentUni: true,
    }
];

export default education;