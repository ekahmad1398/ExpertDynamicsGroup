import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

import { navLinks, siteMeta } from "../../content/site-content";
import { ThemeToggle } from "../ui/theme-toggle";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      return undefined;
    }

    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-[1.75rem] border transition-all duration-300 ${
          isScrolled ? "nav-shell-scrolled" : "nav-shell"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="brand-logo-shell shrink-0">
              <img
                src="/edg-logo.png"
                alt={siteMeta.company}
                className="brand-logo-image h-11 w-auto sm:h-12"
              />
            </span>
            <span className="min-w-0">
              <span className="nav-kicker">Dynamics 365 | Azure | Power Platform</span>
              <span className="mt-1 block truncate font-display text-lg font-bold tracking-[-0.04em] text-[color:var(--text-main)]">
                {siteMeta.company}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.id} href={`/#${link.id}`} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <a href="/#contact" className="primary-button whitespace-nowrap px-5 py-2.5">
              Contact Us
              <FiArrowUpRight size={15} />
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="icon-button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMobileOpen((current) => !current)}
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </div>
      <div
        id="mobile-navigation"
        className={`mx-auto mt-3 max-w-7xl px-1 transition-all duration-300 lg:hidden ${
          mobileOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="glass-panel flex flex-col gap-2 p-3">
          <div className="rounded-[1.2rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-faint)] px-4 py-3">
            <p className="nav-kicker">Microsoft Consulting</p>
            <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">
              Dynamics 365, Azure, reporting, automation, and integration delivery.
            </p>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              className="mobile-nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="/#contact" className="primary-button mt-2 px-4 py-3 text-center">
            Contact Us
          </a>
          <NavLink className="secondary-button mt-2 px-4 py-3 text-center" to="/privacy-policy">
            Privacy Policy
          </NavLink>
        </div>
      </div>
    </header>
  );
}
