import { m } from "framer-motion";
import { FiArrowRight, FiDownload, FiPlayCircle } from "react-icons/fi";

import { heroStats, siteMeta, trustItems } from "../../content/site-content";
import { fadeUpItem } from "../ui/motion-variants";
import { Reveal, Stagger } from "../ui/reveal";

export function HeroSection() {
  return (
    <section id="hero" className="section-shell pt-16 sm:pt-20">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="space-y-8">
          <Reveal>
            <span className="hero-eyebrow-pill">
              {siteMeta.heroEyebrow}
            </span>
          </Reveal>

          <Reveal className="space-y-5" delay={0.04}>
            <h1 className="hero-title max-w-4xl">{siteMeta.heroTitle}</h1>
            <p className="hero-copy max-w-2xl">{siteMeta.heroDescription}</p>
          </Reveal>

          <Reveal className="flex flex-wrap gap-4" delay={0.08}>
            <a href="/#contact" className="primary-button px-6 py-3.5">
              Start a Discovery Call
              <FiArrowRight size={16} />
            </a>
            <a href="/edg-capability-brief.txt" className="secondary-button px-6 py-3.5" download>
              <FiDownload size={16} />
              Download Capability Brief
            </a>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-3" delayChildren={0.15}>
            {heroStats.map((stat) => (
              <m.div key={stat.label} className="surface-card p-5" variants={fadeUpItem}>
                <p className="text-2xl font-semibold text-[color:var(--text-main)]">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">{stat.label}</p>
              </m.div>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.12}>
          <div className="hero-grid">
            <div className="hero-panel hero-panel-strong">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="section-eyebrow">Company Snapshot</p>
                  <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--text-main)]">
                    Experienced, Personalized IT Consulting
                  </h2>
                </div>
                <div className="hero-chip">
                  <FiPlayCircle size={22} />
                </div>
              </div>

              <div className="hero-logo-card mt-6">
                <img src="/edg-logo.png" alt={siteMeta.company} className="brand-logo-image h-24 w-auto sm:h-28" />
              </div>

              <p className="mt-6 text-sm leading-7 text-[color:var(--text-muted)]">
                Let us build the infrastructure for your success with Microsoft-focused consulting
                across Dynamics 365, Azure, Power Platform, reporting, and connected enterprise
                delivery.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {trustItems.slice(0, 4).map((item) => (
                  <div key={item} className="hero-service-item">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
                      Capability
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[color:var(--text-main)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-panel hero-stack-frame">
              <div className="hero-stack-image-shell">
                <img
                  src="/edg-stack.jpg"
                  alt="Expert Dynamics Group technology stack"
                  className="hero-stack-image"
                />
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-[1.08fr_0.92fr]">
                <div className="dashboard-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
                    Service Coverage
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text-main)]">
                    Microsoft services plus broader engineering support where the project needs it
                  </h3>
                  <div className="mt-5 grid gap-2">
                    {trustItems.slice(0, 3).map((item) => (
                      <span key={item} className="stack-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="dashboard-mini-card p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-soft)]">
                      Core Promise
                    </p>
                    <p className="mt-3 text-lg font-semibold text-[color:var(--text-main)]">
                      Build the right infrastructure
                    </p>
                  </div>
                  <div className="dashboard-mini-card p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-soft)]">
                      Delivery Lens
                    </p>
                    <p className="mt-3 text-lg font-semibold text-[color:var(--text-main)]">
                      Practical, business-aware execution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-10" delay={0.16}>
        <div className="trust-strip">
          {trustItems.map((item) => (
            <span key={item} className="trust-pill">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
