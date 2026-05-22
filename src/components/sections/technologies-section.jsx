import { technologyGroups } from "../../content/site-content";
import { Reveal, Stagger } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function TechnologiesSection() {
  return (
    <section id="technologies" className="section-shell deferred-section">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Capability coverage organized around real delivery conversations."
            description="The live site references both Microsoft and broader technical support. This layout groups them in a way that is easier to scan and understand."
          />
        </Reveal>

        <Stagger className="grid gap-5">
          {technologyGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article key={group.title} className="glass-panel p-6">
                <div className="flex items-start gap-4">
                  <div className="icon-chip shrink-0">
                    <Icon size={22} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text-main)]">
                      {group.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">
                      {group.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {group.items.map((item) => (
                        <span key={item} className="stack-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
