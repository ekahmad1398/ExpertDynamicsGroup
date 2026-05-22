import { FiArrowRight } from "react-icons/fi";

import { siteMeta } from "../../content/site-content";
import { Reveal } from "../ui/reveal";

export function CtaBanner() {
  return (
    <section className="section-shell deferred-section">
      <Reveal>
        <div className="cta-banner">
          <div>
            <p className="section-eyebrow">Next Step</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              {siteMeta.ctaTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200">
              {siteMeta.ctaDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="/#contact" className="cta-button-primary px-6 py-3.5">
              Contact the team
              <FiArrowRight size={16} />
            </a>
            <a href="/#services" className="cta-button-secondary px-6 py-3.5">
              Explore services
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
