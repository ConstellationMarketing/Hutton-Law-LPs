import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px] bg-wosnik-dark">
      {/* Navigation Bar */}
      <div className="relative w-full bg-wosnik-dark border-b border-wosnik-accent/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2Fb4f2e96d6a3749649d062d8b972f3f32?format=webp&width=800&height=1200"
              alt="Hutton Tax Solutions"
              className="h-16 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-end">
            <p className="font-body text-wosnik-accent text-xs uppercase tracking-wider">Oklahoma's IRS Tax Resolution Firm</p>
            <a
              href="tel:4053789481"
              className="font-body text-white hover:text-wosnik-accent transition-colors text-lg font-semibold"
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
