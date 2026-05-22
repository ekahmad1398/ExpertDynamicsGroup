import { Link } from "react-router-dom";

import { PageMeta } from "../components/ui/page-meta";

export function PrivacyPage() {
  return (
    <section className="section-shell">
      <PageMeta
        title="Privacy Policy | Expert Dynamics Group"
        description="Privacy policy page for Expert Dynamics Group."
      />
      <div className="mx-auto max-w-4xl">
        <div className="glass-panel p-6 sm:p-8">
          <p className="section-eyebrow">Privacy Policy</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-[color:var(--text-main)]">
            Privacy policy information presented in a cleaner, easier-to-read format.
          </h1>
          <div className="mt-6 space-y-4 text-sm leading-8 text-[color:var(--text-muted)]">
            <p>
              Expert Dynamics Group states that it may collect information provided by site
              visitors when users browse the site, submit a form, or contact the company about
              services.
            </p>
            <p>
              Typical information may include names, email addresses, mailing addresses, phone
              numbers, and request details connected to inquiries, support needs, or project
              discussions.
            </p>
            <p>
              Information may be used to respond to inquiries, improve services, support customer
              communication, and maintain appropriate operational and security practices.
            </p>
          </div>

          <Link to="/" className="secondary-button mt-8 px-5 py-3">
            Return to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
