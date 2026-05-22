import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-3xl text-center">
        <div className="glass-panel p-8 sm:p-10">
          <p className="section-eyebrow">404</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-[color:var(--text-main)]">
            This page could not be found.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[color:var(--text-muted)]">
            The route does not exist on this website. Use the link below to return to the main
            Expert Dynamics Group homepage.
          </p>
          <Link to="/" className="primary-button mt-8 px-6 py-3">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
