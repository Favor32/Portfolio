import AboutSection from "./components/AboutSection";
import FocusSection from "./components/FocusSection"
import ServicesSection from "./components/ServicesSection";
import ToolkitSection from "./components/ToolkitSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <AboutSection />
      <FocusSection/>
      <ServicesSection />
      <ToolkitSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}