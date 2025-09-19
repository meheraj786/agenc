import Image from "next/image";
import HeroBanner from "./compo/Banner";
import ServicesSection from "./compo/Service";
import StatsSection from "./compo/Client";
import ProjectsSection from "./compo/Portfolio";
import ContactSection from "./compo/Contact";
import Footer from "./compo/Footer";
import OurTeamSection from "./compo/OutTeam";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroBanner />
      <ServicesSection/>
      <StatsSection/>
      <ProjectsSection/>
      <OurTeamSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
