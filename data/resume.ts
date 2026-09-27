export const personalInfo = {
  name: "Sabyasachi Sahoo",
  title: "Senior Front-End Developer",
  location: "Bengaluru, Karnataka",
  email: "developer.sabya@gmail.com",
  linkedin: "https://linkedin.com/in/developersabya",
  summary:
    "Senior Front-End Developer with 11+ years building scalable, high-performance web applications for banking, healthcare, retail, and technology domains. Expert in React, Angular, Vue.js, and TypeScript, with proven success delivering trading platforms, investment dashboards, and enterprise-scale portals for Fortune 500 clients.",
};

export const metrics = [
  { value: "25%", label: "faster trade execution", context: "US trading platform, Deloitte" },
  { value: "30%", label: "faster portal scaling", context: "Micro-frontend architecture" },
  { value: "40%", label: "less research time", context: "React + GenAI automation" },
  { value: "35%", label: "faster load time", context: "Investment dashboards, TCS" },
  { value: "15%", label: "higher engagement", context: "Angular apps, EPAM" },
  { value: "11+", label: "years in development", context: "Banking, healthcare, retail" },
];

export const skillGroups = [
  {
    label: "Core & frameworks",
    items: ["React.js", "Angular", "Vue.js", "TypeScript", "Next.js"],
  },
  {
    label: "State & data",
    items: ["Redux", "Context API", "RxJS"],
  },
  {
    label: "Quality & tooling",
    items: ["Jest", "Cypress", "Webpack", "TailwindCSS"],
  },
  {
    label: "Architecture & delivery",
    items: ["Micro Frontends", "Agile/Scrum", "Generative AI"],
  },
];

export const experience = [
  {
    company: "Deloitte",
    position: "Senior Consultant",
    duration: "Jan 2020 – Present",
    current: true,
    startYear: 2020,
    endYear: 2026,
    achievements: [
      "Led front-end teams for a leading US financial firm's trading platforms, improving execution speed by 25%",
      "Architected micro-frontend portals that scaled 30% faster across teams",
      "Built React + AI automation that cut research time by 40%",
    ],
  },
  {
    company: "EPAM",
    position: "Software Engineer",
    duration: "Aug 2019 – Dec 2019",
    current: false,
    startYear: 2019,
    endYear: 2019.4,
    achievements: ["Built Angular apps that boosted user engagement by 15%"],
  },
  {
    company: "TCS",
    position: "IT Analyst",
    duration: "Mar 2015 – Aug 2019",
    current: false,
    startYear: 2015,
    endYear: 2019,
    achievements: [
      "Developed investment dashboards for a leading US financial services organization using Angular, Vue, and TypeScript",
      "Enhanced performance, reducing load time by 35%",
    ],
  },
];

export const projects = [
  {
    title: "Trading Platform — Leading US Financial Firm",
    description:
      "High-frequency trading interfaces with real-time data visualization and optimized React architecture.",
    tech: ["React.js", "TypeScript", "D3.js"],
    impact: "+25% execution speed",
    status: "Production",
  },
  {
    title: "Micro-Frontend Portal Architecture",
    description:
      "Module Federation-based platform enabling independent team deploys and shared component libraries.",
    tech: ["React.js", "Module Federation"],
    impact: "+30% scaling speed",
    status: "Production",
  },
  {
    title: "AI-Powered Research Automation",
    description:
      "Generative AI integration into a React front end to automate manual research workflows.",
    tech: ["React.js", "Generative AI", "Node.js", "Python"],
    impact: "−40% research time",
    status: "Production",
  },
  {
    title: "Investment Dashboard — Financial Services Org",
    description:
      "Investment tracking dashboards across Angular and Vue with a shared TypeScript data layer.",
    tech: ["Angular", "Vue.js", "TypeScript", "REST APIs"],
    impact: "−35% load time",
    status: "Production",
  },
];

export const education = [
  {
    degree: "B.Tech, Electrical Engineering",
    institution: "Government College of Engineering, Keonjhar",
    duration: "2010 – 2014",
  },
];
