// Type for job openings
export type JobOpening = {
  id: string;
  title: string;
  level: string;
  remote?: boolean;
  summary: string;
  details: string;
  specs: string[];
  employmentType: string;
  workType: string;
  salary: string;
  experience: string;
  location: string;
};

// Mock data for job openings
export const jobOpenings: JobOpening[] = [
  {
    id: "1",
    title: "Full Stack Developer",
    level: "Mid-Level",
    remote: false,
    summary:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases...",
    details: `Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases and APIs using technologies such as Node.js, Python, Ruby, or Java. Designing, implementing, and managing databases (SQL or NoSQL) to ensure data integrity and efficient retrieval. Using version control systems like Git to manage code changes and collaborate with other developers. Implementing security best practices to protect applications from vulnerabilities and threats. Automating deployment processes and managing CI/CD pipelines to streamline development and release cycles. Working with cross-functional teams, including designers, product managers, and other developers, to deliver high-quality software.`,
    specs: [
      "Proficiency in front-end technologies HTML, CSS, JavaScript frameworks like React or Angular.",
      "Proficiency in back-end technologies Node.js, Python, Ruby, Java, etc.",
      "Experience in designing and managing databases (SQL and NoSQL)",
      "Proficiency in schema design and query optimization.",
      "Strong knowledge of version control systems, particularly Git.",
      "Expertise in managing and collaborating on code repositories.",
      "Knowledge of web security best practices.",
      "Experience with performance optimization techniques.",
      "Excellent collaboration skills for working effectively in a team environment.",
      "Ability to communicate technical concepts to non-technical stakeholders.",
    ],
    employmentType: "Full-time",
    workType: "Remote",
    salary: "Commensurate with experience and skills",
    experience: "Minimum 3 Years",
    location: "Remote",
  },
  {
    id: "2",
    title: "React Developer",
    level: "Mid-Level",
    remote: true,
    summary:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases...",
    details: `Work closely with designers and backend developers to create seamless, high-performance web applications. Maintain and optimize existing React applications for maximum speed and scalability.`,
    specs: [
      "Strong proficiency in React.js and its core principles.",
      "Experience with popular React.js workflows (such as Redux).",
      "Familiarity with RESTful APIs.",
      "Knowledge of modern authorization mechanisms, such as JSON Web Token.",
      "Familiarity with code versioning tools such as Git.",
    ],
    employmentType: "Full-time",
    workType: "Remote",
    salary: "Commensurate with experience and skills",
    experience: "Minimum 2 Years",
    location: "Remote",
  },
  {
    id: "3",
    title: "Flutter Developer",
    level: "Mid-Level",
    remote: true,
    summary:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases...",
    details: `Develop and maintain cross-platform mobile applications using Flutter. Collaborate with UI/UX designers and backend developers to deliver high-quality products.`,
    specs: [
      "Experience with Dart and Flutter framework.",
      "Knowledge of mobile app architecture and design patterns.",
      "Experience with third-party libraries and APIs.",
      "Familiarity with code versioning tools such as Git.",
    ],
    employmentType: "Full-time",
    workType: "Remote",
    salary: "Commensurate with experience and skills",
    experience: "Minimum 2 Years",
    location: "Remote",
  },
  {
    id: "4",
    title: "Php Developer",
    level: "Mid-Level",
    remote: true,
    summary:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases...",
    details: `Develop and maintain server-side logic using PHP. Integrate user-facing elements developed by front-end developers.`,
    specs: [
      "Strong knowledge of PHP web frameworks.",
      "Understanding of MVC design patterns.",
      "Familiarity with SQL/NoSQL databases.",
      "Proficient understanding of code versioning tools, such as Git.",
    ],
    employmentType: "Full-time",
    workType: "Remote",
    salary: "Commensurate with experience and skills",
    experience: "Minimum 2 Years",
    location: "Remote",
  },
  {
    id: "5",
    title: "Mern Stack Developer",
    level: "Mid-Level",
    remote: true,
    summary:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases...",
    details: `Develop and maintain web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Collaborate with cross-functional teams to deliver robust solutions.`,
    specs: [
      "Experience with MongoDB, Express.js, React.js, and Node.js.",
      "Strong understanding of RESTful APIs.",
      "Familiarity with code versioning tools such as Git.",
      "Ability to work independently and in a team.",
    ],
    employmentType: "Full-time",
    workType: "Remote",
    salary: "Commensurate with experience and skills",
    experience: "Minimum 2 Years",
    location: "Remote",
  },
];
