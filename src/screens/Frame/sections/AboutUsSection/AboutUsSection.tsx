import React from "react";
import { CheckCircle } from "lucide-react";

export const AboutUsSection = (): JSX.Element => {
  const highlights = [
    "Proven IRS tax resolution — veteran attorneys handling complex IRS tax debt, liens, and levies",
    "Consultations available — speak directly with a qualified tax attorney",
    "Strong track record resolving IRS matters for individuals and business owners",
    "Oklahoma City-based representation with in-depth knowledge of local IRS processes",
    "Strategic, client-focused advocacy to protect assets and negotiate effective solutions",
  ];

  return (
    <section id="about-us" className="w-full bg-white pt-6 md:pt-8 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-4">
          Why Hutton Tax Solutions
        </h2>
        <p className="font-body text-gray-600 text-center text-base md:text-lg mb-8">
          Providing affordable, expert IRS representation built on strategic, attorney-led guidance.
        </p>

        <div className="flex flex-col space-y-4 text-center max-w-3xl mx-auto mb-8">
          <p className="font-body text-wosnik-dark text-base leading-relaxed">
            Facing IRS tax debt, liens, or levies can be stressful and overwhelming, but you don't have to face them alone. Hutton Tax Solutions begins by carefully reviewing your tax situation to understand your priorities, liabilities, and resolution options.
          </p>

          <p className="font-body text-wosnik-dark text-base leading-relaxed">
            We focus on honest guidance, personalized strategies, and clear communication at every stage of your IRS matter, ensuring you feel informed, supported, and confident in your decisions.
          </p>

          <p className="font-body text-wosnik-dark text-base leading-relaxed">
            Our firm handles complex IRS tax cases with precision and diligence, providing affordable, attorney-led representation for both individuals and business owners across Oklahoma City and surrounding areas.
          </p>

          <p className="font-body text-wosnik-dark text-base leading-relaxed">
            We make sure each client understands IRS procedures, potential consequences, and available IRS resolution options, empowering you to take control of your financial future.
          </p>
        </div>

        <div className="w-full">
          <h3 className="font-heading text-wosnik-dark text-2xl font-normal text-center mb-8">
            Service Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-wosnik-accent rounded-lg p-6 flex flex-col items-center text-center"
              >
                <CheckCircle className="w-10 h-10 text-wosnik-dark mb-3" />
                <p className="font-body text-wosnik-dark text-sm font-medium leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
