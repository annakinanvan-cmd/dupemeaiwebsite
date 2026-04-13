import BackgroundGradients from "@/components/BackgroundGradients";
import CustomCursor from "@/components/CustomCursor";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import PhoneMockup from "@/components/PhoneMockup";
import Platforms from "@/components/Platforms";
import Comparison from "@/components/Comparison";
import PrivacyArchitecture from "@/components/PrivacyArchitecture";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import { CTA, Footer } from "@/components/CTAFooter";

import ContactModal from "@/components/ContactModal";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      {/* Read progress bar */}
      <ScrollProgress />

      {/* Fixed background layers */}
      <BackgroundGradients />

      {/* Client-side enhancements */}
      <CustomCursor />
      <ScrollRevealInit />

      {/* Navigation */}
      <Navbar />

      {/* Page content */}
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Solution />
        <PhoneMockup />
        <SocialProof />
        <Platforms />
        <Comparison />
        <PrivacyArchitecture />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <ContactModal />
      <BackToTop />
    </>
  );
}
