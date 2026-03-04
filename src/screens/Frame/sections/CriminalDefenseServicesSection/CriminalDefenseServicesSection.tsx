import React from "react";

export const CriminalDefenseServicesSection = (): JSX.Element => {
  const serviceCards = [
    {
      title: "IRS Tax Debt Resolution",
      description: "Legal representation for individuals and businesses facing IRS tax debt, with structured strategies designed to resolve balances and restore financial stability.",
    },
    {
      title: "IRS Levies",
      description: "Immediate legal guidance for bank levies and asset seizures, helping protect your income and property from IRS enforcement.",
    },
    {
      title: "IRS Tax Lien Assistance",
      description: "Professional support addressing IRS tax liens, working toward release options and minimizing long-term financial impact.",
    },
    {
      title: "IRS Settlement & Payment Plans",
      description: "Attorney-led negotiations for IRS settlements and structured payment arrangements tailored to your financial situation.",
    },
  ];

  return (
    <section id="practice-areas" className="w-full bg-wosnik-light py-8 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Intro */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-wosnik-dark text-2xl md:text-4xl font-normal mb-4">
            Start With Proven IRS Tax Resolution
          </h2>
          <p className="font-body text-wosnik-dark/70 text-base max-w-3xl mx-auto mb-8">
            You're not alone — our skilled attorneys providing affordable, expert IRS representation.
          </p>
          <h3 className="font-heading text-wosnik-dark text-2xl font-normal">
            IRS &amp; Tax Matters We Handle
          </h3>
        </div>

        {/* Service Cards — 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <h4 className="font-heading text-wosnik-dark text-lg font-semibold mb-2">{card.title}</h4>
              <p className="font-body text-wosnik-dark/70 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-10 md:mt-16 bg-wosnik-accent rounded-lg p-6 md:p-12 text-center">
          <h3 className="font-heading text-wosnik-dark text-2xl md:text-3xl font-normal mb-4">
            Call Now for IRS Tax Help
          </h3>

          <a
            href="tel:4053789481"
            className="inline-block font-heading text-wosnik-dark text-xl md:text-3xl font-semibold hover:opacity-80 transition-opacity mb-4 md:mb-6"
          >
            (405) 378-9481
          </a>

          <p className="font-body text-wosnik-dark text-base">
            Free Consultations available — speak directly with a professional tax attorney today.
          </p>
        </div>
      </div>
    </section>
  );
};
