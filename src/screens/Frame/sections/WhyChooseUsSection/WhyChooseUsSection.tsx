import React from "react";
import { Scale, MapPin, Shield, Calendar } from "lucide-react";

export const WhyChooseUsSection = (): JSX.Element => {
  const features = [
    {
      icon: Scale,
      title: "Proven IRS Tax Resolution",
      text: "Professional tax attorneys with a strong track record helping clients resolve IRS debt, liens, and levies efficiently.",
    },
    {
      icon: MapPin,
      title: "Oklahoma City Tax Attorney",
      text: "Dedicated legal representation for individuals and business owners in Oklahoma City and surrounding areas, providing personalized IRS guidance.",
    },
    {
      icon: Shield,
      title: "Trusted Representation for IRS Enforcement",
      text: "Attorney-led support for federal tax liens, bank levies, and IRS audits, protecting your assets and financial future.",
    },
    {
      icon: Calendar,
      title: "Schedule Your Consultation",
      text: "Speak directly with a qualified IRS tax attorney to review your situation and explore resolution options today.",
    },
  ];

  return (
    <section className="w-full bg-white pt-12 md:pt-20 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-3">
          Why Choose Hutton Tax Solutions
        </h2>
        <p className="font-body text-gray-600 text-center text-lg mb-12">
          Proven IRS tax resolution built on strategic, attorney-led guidance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-wosnik-accent p-6 rounded-lg flex flex-col items-center text-center"
              >
                <IconComponent className="w-12 h-12 text-wosnik-dark mb-4" />
                <h3 className="font-heading text-wosnik-dark text-base font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-wosnik-dark text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
