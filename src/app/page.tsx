import { HeroSection } from "./sections/HeroSection";
import { ProblemSection } from "./sections/ProblemSection";
import { SolutionSection } from "./sections/SolutionSection";
import { EcosystemSection } from "./sections/EcosystemSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { WaitlistSection } from "./sections/WaitlistSection";
import { UsersSection } from "./sections/UsersSection";
import { VisionSection } from "./sections/VisionSection";
import { FinalCTASection } from "./sections/FinalCTASection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <EcosystemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WaitlistSection />
      <UsersSection />
      <VisionSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
