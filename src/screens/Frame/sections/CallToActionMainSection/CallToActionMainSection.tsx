import React from "react";

export const CallToActionMainSection = (): JSX.Element => {
  return (
    <section className="w-full bg-wosnik-accent py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal mb-4">
          Call Now for IRS Tax Help
        </h2>
        <a
          href="tel:4053789481"
          className="inline-block font-heading text-wosnik-dark text-3xl md:text-4xl font-semibold hover:opacity-80 transition-opacity mb-4"
        >
          (405) 378-9481
        </a>
        <p className="font-body text-wosnik-dark text-lg max-w-2xl mx-auto">
          Free Consultations available — speak directly with an experienced tax attorney today.
        </p>
      </div>
    </section>
  );
};
