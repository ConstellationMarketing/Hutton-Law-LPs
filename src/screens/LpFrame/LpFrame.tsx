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
        {/* Top announcement banner */}
        <div className="w-full bg-wosnik-accent/10 border-b-2 border-wosnik-accent py-4 px-4">
          <p className="max-w-5xl mx-auto font-inter font-bold text-wosnik-dark text-center text-sm md:text-base leading-relaxed">
            Unlike most other tax resolution firms, when you meet with us for your free consultation you'll meet with a tax attorney that works cases daily, not a salesperson. When you retain us, you'll work exclusively with a tax attorney, not an assistant.
          </p>
        </div>
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
