import { m } from "framer-motion";

import { whyChoosePoints } from "../../content/site-content";
import { fadeUpItem } from "../ui/motion-variants";
import { Reveal, Stagger } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function WhyChooseSection() {
  return (
    <section className="section-shell deferred-section">
      <Reveal>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A smaller consultancy can still present a clear, disciplined, enterprise-ready point of view."
          description="These points reinforce the company’s Microsoft focus, practical service model, and willingness to support broader technical work when the engagement needs it."
        />
      </Reveal>

      <Stagger className="mt-8 grid gap-5 lg:grid-cols-3">
        {whyChoosePoints.map((point) => {
          const Icon = point.icon;

          return (
            <m.article key={point.title} className="surface-card interactive-lift p-6" variants={fadeUpItem}>
              <div className="icon-chip">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text-main)]">
                {point.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">{point.text}</p>
            </m.article>
          );
        })}
      </Stagger>
    </section>
  );
}
