interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Indonesia",
        level: "Native",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "Jawa",
        level: "Native",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "English",
        level: "additional language",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "Sunda",
        level: "additional language",
        description: "I speak fluently and write fluently",
        show: true
    }
];

export default languages;