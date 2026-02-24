import React from "react";
import { CallToActionMainSection } from "./sections/CallToActionMainSection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { CriminalDefenseServicesSection } from "./sections/CriminalDefenseServicesSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { AboutUsSection } from "./sections/AboutUsSection";
import { AttorneySection } from "./sections/AttorneySection";

export const Frame = (): JSX.Element => {
  return (
    <div className="w-full bg-wosnik-light">
      <div className="flex flex-col">
        <HeroSection />
        <CriminalDefenseServicesSection />
        <WhyChooseUsSection />
        <AboutUsSection />
        <AttorneySection />
        <CallToActionMainSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
};
