import { contactDetails, siteMeta } from "../../content/site-content";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-shell deferred-section">
      <div className="grid items-start gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <div className="surface-card p-6 sm:p-7">
            <p className="section-eyebrow">Business Context</p>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--text-main)]">
              Microsoft consulting rooted in real delivery experience
            </h3>
            <p className="mt-5 text-sm leading-7 text-[color:var(--text-muted)]">{siteMeta.aboutLead}</p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">{siteMeta.aboutBody}</p>

            <div className="mt-6 grid gap-3">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="chip-panel p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
                    {detail.label}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--text-main)]">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="glass-panel p-6 sm:p-7">
            <SectionHeading
              eyebrow="How We Work"
              title="The consulting approach starts with analysis, then moves into practical execution."
              description="Expert Dynamics Group frames its services around identifying gaps, clarifying opportunities, and building a realistic path through implementation, reporting, integration, and optimization work."
            />

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <div className="surface-subtle p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
                  Delivery Approach
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--text-muted)]">
                  <li>Start with business processes, system gaps, and operational pressure points.</li>
                  <li>Translate discovery into a clearer project plan, timeline, and milestone path.</li>
                  <li>Support implementation with cloud, reporting, automation, and integration work.</li>
                </ul>
              </div>

              <div className="surface-subtle p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
                  Why Clients Reach Out
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--text-muted)]">
                  <li>They need stronger alignment around Dynamics 365, Azure, or Power Platform.</li>
                  <li>They want better reporting, cleaner data flow, or more reliable integrations.</li>
                  <li>They value a smaller consulting partner that still understands enterprise systems.</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
