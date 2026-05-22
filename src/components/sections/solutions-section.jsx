import { solutions } from "../../content/site-content";
import { Reveal, Stagger } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function SolutionsSection() {
  return (
    <section id="solutions" className="section-shell deferred-section">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="Solutions"
          title="A clearer point of view on the outcomes clients are actually seeking."
          description="These solution areas connect the company’s platform coverage to the business outcomes clients usually want from ERP, cloud, reporting, and integration work."
        />
      </Reveal>

      <Stagger className="mt-8 grid gap-5 md:grid-cols-2">
        {solutions.map((solution) => {
          const Icon = solution.icon;

          return (
            <article key={solution.title} className="surface-card interactive-lift p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="icon-chip shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text-main)]">
                    {solution.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">
                    {solution.body}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </Stagger>
    </section>
  );
}
