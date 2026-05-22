import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { footerLinks, siteMeta } from "../../content/site-content";

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[color:var(--border-soft)] footer-shell px-6 py-8 shadow-[var(--shadow-soft)] lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="footer-logo-wrap inline-flex items-center justify-center">
                <img
                  src="/edg-logo.png"
                  alt={siteMeta.company}
                  className="brand-logo-image h-16 w-auto sm:h-20"
                />
              </span>
              <div className="min-w-0">
                <p className="section-eyebrow">Expert Dynamics Group</p>
                <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--text-main)]">
                  Experienced, personalized IT consulting for Microsoft-first teams.
                </h2>
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-[color:var(--text-muted)]">
              Let us build the infrastructure for your success through Dynamics 365, Azure, Power
              Platform, reporting, integration delivery, and ongoing optimization support.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="footer-mini-card p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
                  Experience
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--text-main)]">10+ years in IT consulting</p>
              </div>
              <div className="footer-mini-card p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
                  Location
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--text-main)]">
                  Midlothian, Virginia, USA
                </p>
              </div>
              <div className="footer-mini-card p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
                  Focus
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--text-main)]">
                  Dynamics 365, Azure, reporting, and integrations
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
                Contact
              </p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">{siteMeta.location}</p>
              <a href="/#contact" className="secondary-button mt-4 px-4 py-2.5">
                Contact the team
                <FiArrowUpRight size={15} />
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
                Navigation
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {footerLinks.map((link) =>
                  link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-sm text-[color:var(--text-muted)] transition hover:text-[color:var(--text-main)]"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-[color:var(--text-muted)] transition hover:text-[color:var(--text-main)]"
                    >
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-7xl flex-col gap-2 px-2 text-xs uppercase tracking-[0.18em] text-[color:var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright © 2026 Expert Dynamics Group. All rights reserved.</p>
        <p>Midlothian, Virginia, USA</p>
      </div>
    </footer>
  );
}
