import { motion } from "framer-motion";

import { experienceHighlights } from "../../content/site-content";
import { fadeUpItem } from "../ui/motion-variants";
import { Reveal, Stagger } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function StatsSection() {
  return (
    <section id="experience" className="section-shell">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="surface-card-strong p-6 sm:p-7">
            <SectionHeading
              eyebrow="Experience"
              title="Experience shows up in process quality, planning discipline, and technical judgment."
              description="The site highlights more than 10 years of IT experience, then reinforces that with a practical consulting model built around planning, execution, and sustained support."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="stat-panel">
                <p className="stat-value">10+</p>
                <p className="stat-label">Years in IT</p>
              </div>
              <div className="stat-panel">
                <p className="stat-value">365</p>
                <p className="stat-label">Microsoft ecosystem lens</p>
              </div>
              <div className="stat-panel">
                <p className="stat-value">End-to-end</p>
                <p className="stat-label">Analysis through optimization</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Stagger className="grid gap-4">
          {experienceHighlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <motion.article key={highlight.title} className="glass-panel p-6" variants={fadeUpItem}>
                <div className="flex items-start gap-4">
                  <div className="icon-chip shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-[color:var(--text-main)]">
                      {highlight.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">
                      {highlight.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
