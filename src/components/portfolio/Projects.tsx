import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "MediConnect",
    tag: "FHIR-Integrated AI Agent",
    period: "Apr 2026 — Present",
    desc: "AI healthcare agent integrating MCP tools, FHIR APIs and LLMs for natural-language querying across EHR systems with 95%+ retrieval accuracy.",
    bullets: [
      "120+ FHIR API requests across auth, R4 resources & workflows tested in Insomnia.",
      "3+ Dockerized microservices with JWT auth on MedPlum / OpenEMR.",
    ],
    stack: ["MCP", "FHIR", "Docker", "Python"],
  },
  {
    title: "SparkMind",
    tag: "End-to-End RAG Platform",
    period: "Mar 2026",
    desc: "Production RAG pipeline with citation tracing, debug scoring, configurable chunking and high-performance semantic search.",
    bullets: [
      "Interactive 3D embedding visualisations + knowledge-graph generation.",
      "Vector module: upload → chunk → embed → search via ChromaDB.",
    ],
    stack: ["Python", "ChromaDB", "RAG", "Knowledge Graphs"],
    links: { github: "https://github.com/Sparkable-dev/SparkMind" },
  },
  {
    title: "MindGuardAI",
    tag: "Multimodal Content Safety Analyzer",
    period: "Feb 2026",
    desc: "Multimodal AI system analysing text, audio, image and video for harmful content detection with risk scores and recommendations.",
    bullets: [
      "Whisper + CLIP integration for speech-risk and unsafe-imagery detection.",
      "Generates risk scores enabling safer content-moderation workflows.",
    ],
    stack: ["Python", "Flask", "React", "Whisper", "CLIP", "PyTorch"],
    links: { github: "https://github.com/varshitha211/safe-creator" },
  },
  {
    title: "DocSpot",
    tag: "Doctor Appointment Platform",
    period: "Jun — Jul 2025",
    desc: "Full-stack healthcare platform with JWT auth and role-based access for patients, doctors and admins.",
    bullets: [
      "REST APIs handling 100+ records for appointments and onboarding.",
      "Optimised MongoDB schemas for performance and clean data flow.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js"],
    links: { github: "https://github.com/varshitha211/DocSpot" },
  },
  {
    title: "CrossPostAI",
    tag: "AI Content Automation",
    period: "Aug 2025",
    desc: "AI-powered content automation platform for video resizing, captions and hashtag generation, built with a 6-member team.",
    bullets: [
      "Whisper AI (90%+ accuracy) + Gemini for subtitle and content optimisation.",
      "Automated FFmpeg pipelines reducing manual editing effort by 60%.",
    ],
    stack: ["Node.js", "Express", "Whisper", "Gemini", "Firebase", "FFmpeg"],
  },
  {
    title: "Gesture Volume Controller",
    tag: "Computer Vision Utility",
    period: "2024",
    desc: "Hands-free volume control using real-time hand-tracking and gesture recognition.",
    bullets: [
      "OpenCV + MediaPipe pipeline with smooth volume mapping.",
      "Lightweight desktop tool runnable on any webcam.",
    ],
    stack: ["Python", "OpenCV", "MediaPipe"],
    links: { github: "https://github.com/varshitha211/gesture-volume-controller" },
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Things I've <span className="text-gradient">built</span></>}
      subtitle="A selection of products, prototypes and experiments."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="glass rounded-2xl p-6 card-hover flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-primary">{p.tag}</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{p.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
            <ul className="space-y-1.5 mb-4 flex-1">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-secondary mt-1">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.stack.map((s) => (
                <span key={s} className="text-[11px] px-2 py-1 rounded-md bg-surface-elevated border border-border font-mono">
                  {s}
                </span>
              ))}
            </div>
            {p.links?.github && (
              <div className="flex gap-3 pt-3 border-t border-border">
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition"
                >
                  <Github size={16} /> Code <ExternalLink size={12} />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
