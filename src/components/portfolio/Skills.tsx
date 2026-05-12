import { Code2, Cpu, Database, Cloud, Layers, Brain } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "Java", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    icon: Layers,
    title: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "Tailwind"],
  },
  {
    icon: Cpu,
    title: "Backend & APIs",
    items: ["Node.js", "Express", "Flask", "REST", "JWT"],
  },
  {
    icon: Brain,
    title: "AI & LLM",
    items: ["RAG", "Semantic Search", "Prompt Eng.", "CLIP", "Whisper", "OpenAI / Gemini", "ChromaDB"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Vector DBs"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["Docker", "Git / GitHub", "CI/CD", "Vercel", "Railway", "OpenRouter"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title={<>Tech I <span className="text-gradient">love</span> using</>}
      subtitle="From shipping AI agents to crafting pixel-tight UIs."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map(({ icon: Icon, title, items }) => (
          <div key={title} className="glass rounded-2xl p-6 card-hover group">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="text-primary-foreground" size={18} />
              </div>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-lg bg-surface-elevated border border-border hover:border-primary/50 hover:text-primary transition">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid sm:grid-cols-3 gap-5">
        {[
          { k: "Core CS", v: "DSA · OOP · DBMS · OS" },
          { k: "AI Specialty", v: "Multimodal · RAG · MCP" },
          { k: "Methods", v: "Agile · Pair-coding · TDD" },
        ].map((s) => (
          <div key={s.k} className="rounded-2xl p-5 bg-gradient-primary text-primary-foreground">
            <p className="text-xs uppercase tracking-widest opacity-80">{s.k}</p>
            <p className="font-display font-semibold mt-1">{s.v}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
