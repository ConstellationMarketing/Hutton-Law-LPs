import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px] bg-wosnik-dark">
      {/* Navigation Bar */}
      <div className="relative w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/logo.webp"
              alt="Hutton Tax Solutions"
              className="h-24 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-end">
            <p className="font-body text-black text-sm uppercase tracking-wider">Oklahoma's IRS Tax Resolution Firm</p>
            <a
              href="tel:4053789481"
              className="font-body text-black hover:text-wosnik-accent transition-colors text-2xl font-semibold"
            >
              (405) 378-9481
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4">
          Trusted Oklahoma IRS Tax Resolution Attorneys
        </h1>

        <h2 className="font-body text-wosnik-accent text-xl md:text-2xl font-semibold mb-6">
          Hutton Tax Solutions — Oklahoma City IRS Tax Debt Help
        </h2>

        <p className="font-body text-white text-base max-w-3xl mx-auto leading-relaxed mb-8">
          Owe back taxes or facing IRS enforcement? Hutton Tax Solutions provides experienced legal representation for tax debt, liens, levies, audits, and IRS negotiations. With over a decade of exclusive tax law practice and direct attorney support, we guide individuals and business owners through IRS resolution options with personalized legal strategy.
        </p>

        <button
          className="bg-wosnik-accent hover:bg-wosnik-accent/80 text-wosnik-dark font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Schedule Your Consultation
        </button>
      </div>
    </section>
  );
};
