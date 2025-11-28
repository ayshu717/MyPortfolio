import { AboutSection } from "@/components/about-section";
import { CoCurricularSection } from "@/components/cocurricular-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CoCurricularSection />
      <ContactSection />
    </>
  );
}
