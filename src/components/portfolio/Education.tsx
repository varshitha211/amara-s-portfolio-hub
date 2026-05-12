import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    school: "Vishnu Institute of Technology",
    degree: "B.Tech — Computer Science (AI & DS)",
    period: "2024 — 2027",
    grade: "CGPA: 9.5 (till date)",
    note: "Specializing in Artificial Intelligence and Data Science with strong fundamentals in DSA, ML, and systems.",
  },
  {
    school: "BVC Institute of Technology",
    degree: "Diploma in Computer Engineering",
    period: "2021 — 2024",
    grade: "Percentage: 94.48%",
    note: "Built a strong foundation in programming, data structures, OOP and software engineering practices.",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Where I <span className="text-gradient">learn & grow</span></>}
      subtitle="Academic journey shaping my engineering mindset."
    >
      <div className="relative space-y-6">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />
        {items.map((it) => (
          <div key={it.school} className="relative md:pl-20">
            <div className="hidden md:flex absolute left-0 top-2 h-12 w-12 rounded-2xl bg-gradient-primary items-center justify-center glow-ring">
              <GraduationCap className="text-primary-foreground" size={22} />
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{it.school}</h3>
                  <p className="text-muted-foreground">{it.degree}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono text-primary">{it.period}</p>
                  <p className="text-sm text-secondary font-medium">{it.grade}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{it.note}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
