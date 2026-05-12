import { Code, Trophy, Zap } from "lucide-react";
import { Section } from "./Section";

const platforms = [
  {
    name: "LeetCode",
    handle: "Krupa_varshitha_",
    url: "https://leetcode.com/u/Krupa_varshitha_/",
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "CodeChef",
    handle: "calm_wave_82",
    url: "https://www.codechef.com/users/calm_wave_82",
    color: "from-amber-500 to-rose-500",
  },
  {
    name: "HackerRank",
    handle: "varshithaamara01",
    url: "https://www.hackerrank.com/profile/varshithaamara01",
    color: "from-emerald-400 to-teal-500",
  },
];

const topics = [
  "Arrays", "Strings", "Hashing", "Two Pointers", "Sliding Window",
  "Binary Search", "Recursion", "Backtracking", "Trees", "Graphs",
  "DP", "Greedy", "Tries", "Heaps", "Bit Manipulation",
];

export function DSA() {
  return (
    <Section
      id="dsa"
      eyebrow="Problem Solving"
      title={<>DSA &amp; <span className="text-gradient">Competitive Coding</span></>}
      subtitle="Sharpening fundamentals daily across multiple platforms."
    >
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="glass rounded-2xl p-6 card-hover group block"
          >
            <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
              <Code className="text-white" size={22} />
            </div>
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-sm text-muted-foreground font-mono">@{p.handle}</p>
            <p className="text-xs text-primary mt-3 inline-flex items-center gap-1">
              View profile →
            </p>
          </a>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="text-secondary" size={20} />
            <h3 className="font-semibold">Highlights</h3>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><span className="text-primary">▹</span> Completed AlgoUniversity Graph Camp — intensive program on graph algorithms.</li>
            <li className="flex gap-3"><span className="text-primary">▹</span> Consistent problem-solver across LeetCode, CodeChef and HackerRank.</li>
            <li className="flex gap-3"><span className="text-primary">▹</span> Strong grasp of patterns: sliding window, DP, graph traversal, backtracking.</li>
          </ul>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-primary" size={20} />
            <h3 className="font-semibold">Topics covered</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-surface-elevated border border-border font-mono hover:border-primary/50 hover:text-primary transition">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
