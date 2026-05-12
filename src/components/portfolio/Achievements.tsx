import { Award, Medal, Sparkles, Star, Trophy } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: Trophy,
    title: "Runner-Up — Technova 2K26 Hackathon",
    desc: "Secured 3rd place by building and presenting an innovative technical solution.",
  },
  {
    icon: Award,
    title: "Certificate of Appreciation — EY Techathon",
    desc: "Recognised for participation and contribution at EY's flagship innovation challenge.",
  },
  {
    icon: Medal,
    title: "14th Rank — AI Masterminds Quiz (Unstop)",
    desc: "Awarded a Certificate of Excellence and goodies for ranking 14th nationwide.",
  },
  {
    icon: Star,
    title: "Graph Camp — AlgoUniversity",
    desc: "Completed an intensive program on graph algorithms and problem-solving.",
    link: "https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/graph_camp/amara-krupa-varshitha.png",
  },
  {
    icon: Sparkles,
    title: "Data Analytics — HCL Career Shaper™",
    desc: "Python, NumPy, Pandas, Matplotlib, Seaborn, SciPy — analytics, viz, statistics, ML & big-data concepts.",
  },
  {
    icon: Sparkles,
    title: "Selected — AI Workshop on Product Thinking & AI-powered Development",
    desc: "Speakers from Global GTM Expert, Founder, and AI Tooling specialist roles.",
  },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title={<>Awards & <span className="text-gradient-warm">milestones</span></>}
      subtitle="Moments that kept me building and learning."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ icon: Icon, title, desc, link }) => (
          <div key={title} className="glass rounded-2xl p-6 card-hover">
            <div className="h-11 w-11 rounded-xl bg-gradient-warm flex items-center justify-center mb-4">
              <Icon className="text-secondary-foreground" size={20} />
            </div>
            <h3 className="font-semibold mb-2 leading-snug">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
            {link && (
              <a href={link} target="_blank" rel="noreferrer" className="text-xs text-primary mt-3 inline-block hover:underline">
                View certificate →
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
