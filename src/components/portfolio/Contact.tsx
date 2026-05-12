import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={<>Let's <span className="text-gradient">build</span> something</>}
      subtitle="Open to internships, collaborations and AI-engineering roles."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-8 space-y-5">
          <a href="mailto:varshithaamara020@gmail.com" className="flex items-start gap-4 group">
            <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
              <Mail className="text-primary-foreground" size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
              <p className="font-medium group-hover:text-primary transition">varshithaamara020@gmail.com</p>
            </div>
          </a>
          <a href="tel:+919391398148" className="flex items-start gap-4 group">
            <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
              <Phone className="text-primary-foreground" size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
              <p className="font-medium group-hover:text-primary transition">+91 93913 98148</p>
            </div>
          </a>
          <div className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
              <MapPin className="text-primary-foreground" size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Location</p>
              <p className="font-medium">Andhra Pradesh, India</p>
            </div>
          </div>
          <div className="pt-4 flex gap-3 border-t border-border">
            <a href="https://github.com/varshitha211" target="_blank" rel="noreferrer" className="h-11 w-11 rounded-xl glass flex items-center justify-center hover:text-primary transition">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/amara-krupa-varshitha-1b3715342" target="_blank" rel="noreferrer" className="h-11 w-11 rounded-xl glass flex items-center justify-center hover:text-primary transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <form
          className="glass rounded-2xl p-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const name = (form.elements.namedItem("name") as HTMLInputElement).value;
            const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
            window.location.href = `mailto:varshithaamara020@gmail.com?subject=Hello from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
          }}
        >
          <div>
            <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
            <input id="name" name="name" required className="mt-1 w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition" />
          </div>
          <div>
            <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
            <input id="email" name="email" type="email" required className="mt-1 w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition" />
          </div>
          <div>
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea id="message" name="message" rows={5} required className="mt-1 w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition resize-none" />
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition glow-ring">
            Send message
          </button>
        </form>
      </div>

      <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Amara Krupa Varshitha · Crafted with care.
      </footer>
    </Section>
  );
}
