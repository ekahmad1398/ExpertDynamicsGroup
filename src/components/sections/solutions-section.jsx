import { motion } from "framer-motion";

import { solutions } from "../../content/site-content";
import { fadeUpItem } from "../ui/motion-variants";
import { Reveal, Stagger } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function SolutionsSection() {
  return (
    <section id="solutions" className="section-shell">
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
            <motion.article key={solution.title} className="surface-card interactive-lift p-6 sm:p-7" variants={fadeUpItem}>
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
            </motion.article>
          );
        })}
      </Stagger>
    </section>
  );
}
