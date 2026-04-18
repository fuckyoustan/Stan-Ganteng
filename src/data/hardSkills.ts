interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Bash",
    description: "Expert in automation, system-level scripting, and Android optimization.",
    icon: "bash"
  },
  {
    name: "HTML",
    description: "Building the core structure of responsive WebUIs for Android modules.",
    icon: "html"
  },
  {
    name: "CSS",
    description: "Designing modern interfaces with Material Design 3 and fluid layouts.",
    icon: "css"
  },
  {
    name: "JavaScript",
    description: "Implementing interactive logic and real-time data for web-based tools.",
    icon: "javascript"
  }
];

export default hardSkills;