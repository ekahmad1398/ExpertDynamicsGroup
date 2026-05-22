import { AboutSection } from "../components/sections/about-section";
import { ContactSection } from "../components/sections/contact-section";
import { CtaBanner } from "../components/sections/cta-banner";
import { HeroSection } from "../components/sections/hero-section";
import { ServicesSection } from "../components/sections/services-section";
import { SolutionsSection } from "../components/sections/solutions-section";
import { StatsSection } from "../components/sections/stats-section";
import { TechnologiesSection } from "../components/sections/technologies-section";
import { WhyChooseSection } from "../components/sections/why-choose-section";
import { PageMeta } from "../components/ui/page-meta";

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Expert Dynamics Group | Premium Dynamics 365 & Azure Consulting"
        description="Expert Dynamics Group provides Microsoft Dynamics 365, Azure, Power Platform, reporting, and enterprise integration consulting."
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechnologiesSection />
      <SolutionsSection />
      <StatsSection />
      <WhyChooseSection />
      <CtaBanner />
      <ContactSection />
    </>
  );
}
