import { motion } from "framer-motion";

import { services } from "../../content/site-content";
import { fadeUpItem } from "../ui/motion-variants";
import { Reveal, Stagger } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Advisory and delivery services built around Microsoft business platforms."
          description="These service lines organize the capabilities shown on the live site into clearer offers around ERP, CRM, cloud delivery, reporting, automation, and engineering support."
        />
      </Reveal>

      <Stagger className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <motion.article key={service.title} className="surface-card interactive-lift p-6" variants={fadeUpItem}>
              <div className="icon-chip">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text-main)]">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">
                {service.description}
              </p>
            </motion.article>
          );
        })}
      </Stagger>
    </section>
  );
}
