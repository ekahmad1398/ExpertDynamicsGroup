import { Outlet } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

import { ThemeProvider } from "../../hooks/use-theme";
import { ScrollManager } from "../ui/scroll-manager";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function AppShell() {
  return (
    <ThemeProvider>
      <ScrollManager />
      <LazyMotion features={domAnimation}>
        <div className="site-bg">
          <div className="site-noise" />
          <div className="site-orb site-orb-one" />
          <div className="site-orb site-orb-two" />
          <div className="site-orb site-orb-three" />
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="relative z-10">
            <Outlet />
          </main>
          <Footer />
        </div>
      </LazyMotion>
    </ThemeProvider>
  );
}
