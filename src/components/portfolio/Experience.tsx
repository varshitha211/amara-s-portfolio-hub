import { Briefcase } from "lucide-react";
import { Section } from "./Section";

const experiences = [
  {
    role: "AI & Backend Intern",
    company: "Sparkable Digital Solutions",
    location: "Chennai, TN · Startup",
    period: "Mar 2026 — Present",
    points: [
      "Architected end-to-end RAG systems with ChromaDB & Weaviate, delivering semantic search and 3D embedding visualizations that cut retrieval latency by 30%.",
      "Built custom Model Context Protocol (MCP) tools bridging Claude Desktop with FHIR APIs — natural-language querying across healthcare datasets at 95%+ accuracy.",
      "Shipped scalable REST APIs via OpenRouter, tested with Insomnia, deployed via Docker, Railway and Vercel.",
      "Engineered automated Knowledge Graph pipelines for entity extraction, streamlining data workflows by 40%.",
      "Collaborated with cross-functional team in agile sprints, owning feature design from spec to production deploy.",
      "Wrote modular Python services with typed schemas (Pydantic) and unit tests, improving code reliability by 35%.",
      "Integrated multi-provider LLM routing (Gemini, Claude, GPT) with cost-aware fallback strategies.",
    ],
    tags: ["RAG", "ChromaDB", "MCP", "FHIR", "Docker", "LLM"],
  },
  {
    role: "Full Stack Development (MERN) Intern",
    company: "SmartBridge × APSCHE × MongoDB",
    location: "Virtual · 2-Month Short-Term Internship",
    period: "May 2025 — Jul 2025",
    points: [
      "Completed APSCHE-certified MERN Full Stack internship organized by SmartBridge in collaboration with MongoDB.",
      "Built end-to-end web applications using MongoDB, Express.js, React and Node.js with REST API integration.",
      "Designed responsive UIs in React with reusable components, hooks, and client-side routing.",
      "Implemented JWT-based authentication, role-based access and protected routes on the Node/Express backend.",
      "Modeled MongoDB schemas with Mongoose, applied indexing and aggregation pipelines for efficient queries.",
      "Deployed the capstone full-stack project and earned Certificate ID: EXT-APSCHE_FSD-60652.",
    ],
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
  },
  {
    role: "AI & ML Virtual Internship",
    company: "AICTE × EduSkills (AWS Academy)",
    location: "Remote",
    period: "Jan 2025 — Mar 2025",
    points: [
      "Completed AWS Academy's AI & ML curriculum covering SageMaker, model training and deployment workflows.",
      "Built hands-on labs on supervised learning, NLP and computer vision use-cases on AWS.",
      "Trained and tuned regression and classification models, evaluating with precision, recall and F1 metrics.",
      "Explored Amazon Rekognition, Comprehend, and Lex to prototype real-world AI service integrations.",
      "Practiced data pre-processing pipelines using Pandas and NumPy on cloud-hosted Jupyter notebooks.",
    ],
    tags: ["AWS", "SageMaker", "ML", "NLP"],
  },
  {
    role: "Industrial Training — Java Full Stack",
    company: "HQL Edutech, Rajahmundry",
    location: "On-site",
    period: "Nov 2023 — May 2024",
    points: [
      "Six-month intensive on Java, Spring, JDBC, REST APIs and front-end integration.",
      "Built a full-stack capstone project applying OOP, DBMS and MVC architecture.",
      "Designed normalized SQL schemas and wrote optimized JDBC queries for transactional workloads.",
      "Implemented Servlet & JSP based modules with session management and form validation.",
      "Followed Git-based collaborative workflow with code reviews and structured branching strategy.",
    ],
    tags: ["Java", "Spring", "JDBC", "Full Stack"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Real-world <span className="text-gradient-warm">work</span></>}
      subtitle="Internships and training that shaped how I ship."
    >
      <div className="grid gap-6">
        {experiences.map((exp) => (
          <article key={exp.role + exp.period} className="glass rounded-2xl p-6 md:p-8 card-hover">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <Briefcase className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-primary">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
              </div>
              <span className="text-sm font-mono text-secondary">{exp.period}</span>
            </div>
            <ul className="space-y-2 mb-4">
              {exp.points.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">▹</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-surface-elevated border border-border font-mono">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
