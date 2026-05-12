import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles, Zap, Brain, Code2, Rocket } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute top-20 left-[10%] h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[120px] animate-blob" />
      <div className="absolute bottom-10 right-[5%] h-[26rem] w-[26rem] rounded-full bg-accent/15 blur-[120px] animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-secondary/10 blur-[100px] animate-blob" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* LEFT — content */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Open to AI / Full-stack opportunities
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6">
              <span className="block text-muted-foreground/80 text-2xl md:text-3xl font-display font-medium mb-3">
                Hey, I'm
              </span>
              <span className="text-gradient">Amara Krupa</span>
              <br />
              <span className="text-gradient">Varshitha</span>
              <span className="text-foreground"> — </span>
              <span className="relative inline-block">
                <span className="relative z-10">I ship AI.</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-secondary/30 -z-0 rounded" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              CSE (AI &amp; DS) undergrad at Vishnu Institute of Technology. I build
              <span className="text-foreground font-medium"> RAG pipelines</span>,
              <span className="text-foreground font-medium"> MCP tooling</span>, and
              <span className="text-foreground font-medium"> full-stack platforms</span> that ship to real users.
            </p>

            {/* Quick chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { icon: Brain, label: "RAG / LLM Systems" },
                { icon: Code2, label: "MERN + Python" },
                { icon: Zap, label: "MCP & Agents" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground">
                  <Icon size={12} className="text-primary" /> {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition glow-ring overflow-hidden"
              >
                <Rocket size={18} />
                Explore my work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass hover:border-primary/40 transition"
              >
                <Mail size={18} /> Let's talk
              </a>
            </div>

            {/* Socials & meta */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <a href="https://github.com/varshitha211" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:text-primary hover:border-primary/40 transition" aria-label="GitHub">
                  <Github size={16} />
                </a>
                <a href="https://www.linkedin.com/in/amara-krupa-varshitha-1b3715342" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:text-primary hover:border-primary/40 transition" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href="mailto:varshithaamara020@gmail.com" className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:text-primary hover:border-primary/40 transition" aria-label="Email">
                  <Mail size={16} />
                </a>
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs">
                <MapPin size={13} className="text-secondary" /> Andhra Pradesh, India
              </span>
              <span className="font-mono text-xs">+91 93913 98148</span>
            </div>
          </div>

          {/* RIGHT — visual stack */}
          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative">
              {/* Glow halo */}
              <div className="absolute -inset-6 bg-gradient-primary opacity-25 blur-3xl rounded-[2rem]" />

              {/* Avatar / monogram card */}
              <div className="relative glass rounded-3xl p-8 overflow-hidden">
                {/* corner sparkle */}
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-secondary/20 blur-2xl" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="h-20 w-20 rounded-2xl bg-gradient-primary flex items-center justify-center font-display font-bold text-3xl text-primary-foreground glow-ring">
                      AV
                    </div>
                    <span className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-secondary flex items-center justify-center border-2 border-background">
                      <Sparkles size={12} className="text-secondary-foreground" />
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">currently</div>
                    <div className="font-semibold">AI &amp; Backend Intern</div>
                    <div className="text-xs text-primary">@ Sparkable Digital</div>
                  </div>
                </div>

                {/* Stat grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { k: "9.5", v: "CGPA" },
                    { k: "12+", v: "Projects" },
                    { k: "3+", v: "Internships" },
                  ].map((s) => (
                    <div key={s.v} className="rounded-xl bg-surface-elevated/70 p-3 text-center border border-border/50">
                      <div className="text-2xl font-bold text-gradient">{s.k}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{s.v}</div>
                    </div>
                  ))}
                </div>

                {/* Now-building strip */}
                <div className="rounded-xl bg-surface-elevated/70 border border-border/50 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono">Now building</span>
                    <span className="text-[10px] font-mono text-primary">v2026.05</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "MediConnect — RAG over FHIR", pct: 85 },
                      { label: "MCP tools for Claude Desktop", pct: 70 },
                      { label: "Multimodal CrossPostAI", pct: 55 },
                    ].map((p) => (
                      <div key={p.label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground truncate">{p.label}</span>
                          <span className="font-mono text-primary">{p.pct}%</span>
                        </div>
                        <div className="h-1 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-gradient-primary" style={{ width: `${p.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating tag chips */}
              <div className="hidden md:flex absolute -left-6 top-12 px-3 py-2 rounded-xl glass items-center gap-2 animate-float">
                <Brain size={14} className="text-primary" />
                <span className="text-xs font-mono">RAG</span>
              </div>
              <div className="hidden md:flex absolute -right-4 bottom-24 px-3 py-2 rounded-xl glass items-center gap-2 animate-float" style={{ animationDelay: "1.5s" }}>
                <Zap size={14} className="text-secondary" />
                <span className="text-xs font-mono">MCP · FHIR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
