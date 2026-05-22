import { useState } from "react";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";

import { contactDetails, siteMeta } from "../../content/site-content";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

const initialFormState = {
  name: "",
  email: "",
  company: "",
  engagement: "",
  message: "",
};

export function ContactSection() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    const subject = encodeURIComponent(
      `Website Inquiry${formData.engagement ? ` | ${formData.engagement}` : ""} | ${formData.name}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Company: ${formData.company || "Not provided"}`,
        `Engagement Type: ${formData.engagement || "Not provided"}`,
        "",
        "Project Brief:",
        formData.message,
      ].join("\n"),
    );
    const mailtoHref = `mailto:${siteMeta.contactEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoHref;

    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <div className="surface-card-strong h-full p-6 sm:p-7">
            <SectionHeading
              eyebrow="Contact"
              title="Start with the business problem. We can shape the technical path from there."
              description="Use the form to open a prefilled email to the team, or contact them directly with the public company email listed below."
            />

            <div className="mt-7 space-y-4">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="surface-subtle p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
                    {detail.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--text-main)]">{detail.value}</p>
                </div>
              ))}
            </div>

            <a href={`mailto:${siteMeta.contactEmail}`} className="contact-direct-link mt-6">
              <span className="icon-chip shrink-0">
                <FiMail size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
                  Direct Email
                </span>
                <span className="mt-1 block break-all text-sm font-semibold text-[color:var(--text-main)]">
                  {siteMeta.contactEmail}
                </span>
              </span>
            </a>

            <div className="contact-map-panel mt-6">
              <FiMapPin size={18} />
              <p className="text-sm leading-7 text-[color:var(--text-muted)]">
                Serving enterprise transformation conversations from Midlothian, Virginia.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form className="glass-panel p-6 sm:p-7" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="field-shell">
                <span className="field-label">Name</span>
                <input
                  className="field-input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  type="text"
                />
              </label>

              <label className="field-shell">
                <span className="field-label">Email</span>
                <input
                  className="field-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  type="email"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="field-shell">
                <span className="field-label">Company</span>
                <input
                  className="field-input"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company or team"
                  type="text"
                />
              </label>

              <label className="field-shell">
                <span className="field-label">Engagement Type</span>
                <input
                  className="field-input"
                  name="engagement"
                  value={formData.engagement}
                  onChange={handleChange}
                  placeholder="Dynamics, Azure, BI, integration..."
                  type="text"
                />
              </label>
            </div>

            <label className="field-shell mt-4">
              <span className="field-label">Project Brief</span>
              <textarea
                className="field-input min-h-36 resize-y"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what systems, teams, or delivery challenges you want to improve."
                required
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="primary-button px-6 py-3.5" disabled={isSubmitting}>
                {isSubmitting ? "Opening..." : "Email your requirements"}
                <FiSend size={16} />
              </button>
              <p className="text-sm leading-7 text-[color:var(--text-soft)]">
                {isSubmitted
                  ? "Your email app should open with the message prefilled for Expert Dynamics Group."
                  : "Include goals, current tools, and timeline expectations so the first conversation is more useful."}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
