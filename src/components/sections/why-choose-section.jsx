import { whyChoosePoints } from "../../content/site-content";
import { Reveal, Stagger } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function WhyChooseSection() {
  return (
    <section className="section-shell deferred-section">
      <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A smaller consultancy can still present a clear, disciplined, enterprise-ready point of view."
            description="These points reinforce the company's Microsoft focus, practical service model, and willingness to support broader technical work when the engagement needs it."
          />
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {whyChoosePoints.map((point) => {
            const Icon = point.icon;

            return (
              <article key={point.title} className="surface-card interactive-lift h-full p-6">
                <div className="icon-chip">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text-main)]">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">{point.text}</p>
              </article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
