import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { DSA } from "@/components/portfolio/DSA";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amara Krupa Varshitha — AI & Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Amara Krupa Varshitha — CSE (AI & DS) student building RAG pipelines, multimodal AI systems and full-stack platforms.",
      },
      { property: "og:title", content: "Amara Krupa Varshitha — AI & Full-Stack Engineer" },
      { property: "og:description", content: "RAG, multimodal AI, full-stack — projects, experience and achievements." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <DSA />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
