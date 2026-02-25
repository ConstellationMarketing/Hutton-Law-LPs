import React from "react";
import { CallToActionMainSection } from "../Frame/sections/CallToActionMainSection";
import { ContactSection } from "../Frame/sections/ContactSection";
import { FooterSection } from "../Frame/sections/FooterSection";
import { HeroSection } from "../Frame/sections/HeroSection";
import { CriminalDefenseServicesSection } from "../Frame/sections/CriminalDefenseServicesSection";
import { WhyChooseUsSection } from "../Frame/sections/WhyChooseUsSection";
import { AboutUsSection } from "../Frame/sections/AboutUsSection";
import { AttorneySection } from "../Frame/sections/AttorneySection";
import { ReviewsSection } from "../Frame/sections/ReviewsSection/ReviewsSection";

export const LpFrame = (): JSX.Element => {
  return (
    <div className="w-full bg-wosnik-light">
      <div className="flex flex-col">
        <HeroSection />
        <CriminalDefenseServicesSection />
        <WhyChooseUsSection />
        <AboutUsSection />
        <AttorneySection />
        <ReviewsSection />
        <CallToActionMainSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
};
