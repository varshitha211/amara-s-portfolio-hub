import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.25em] uppercase text-primary mb-3 font-mono">
            {eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
