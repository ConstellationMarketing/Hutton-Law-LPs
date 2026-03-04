import React from "react";
import { Phone } from "lucide-react";

export const HeroSection = (): JSX.Element => {
  return (
    <section
      className="relative w-full min-h-[500px] bg-wosnik-dark bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.webp')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 z-0 pointer-events-none" />
      {/* Navigation Bar */}
      <div className="relative z-10 w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center flex-shrink-0">
            <img
              src="/logo.webp"
              alt="Hutton Tax Solutions"
              className="h-14 md:h-24 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-end">
            <p className="hidden md:block font-body text-black text-sm uppercase tracking-wider">Oklahoma's IRS Tax Resolution Firm</p>
            <a
              href="tel:4053789481"
              className="flex items-center gap-1 md:gap-2 font-body text-black hover:text-wosnik-accent transition-colors text-base md:text-3xl font-semibold"
            >
              <Phone className="w-4 h-4 md:w-8 md:h-8 text-wosnik-accent flex-shrink-0" />
              (405) 378-9481
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 md:py-24 text-center">
        <h1 className="font-heading text-white text-3xl md:text-5xl lg:text-6xl font-normal leading-tight mb-3">
          Trusted Oklahoma IRS Tax Resolution Attorneys
        </h1>

        <h2 className="font-body text-wosnik-accent text-lg md:text-2xl font-semibold mb-4">
          Hutton Tax Solutions — Oklahoma City IRS Tax Debt Help
        </h2>

        <p className="font-body text-white text-base max-w-3xl mx-auto leading-relaxed mb-5">
          Owe back taxes or facing IRS enforcement? Hutton Tax Solutions provides professional legal representation for tax debt, liens, levies, audits, and IRS negotiations. With over a decade of exclusive tax law practice and direct attorney support, we guide individuals and business owners through IRS resolution options with personalized legal strategy.
        </p>

        <div className="flex justify-center mb-4">
          <img
            src="/google-reviews-badge.webp"
            alt="5 Star Google Customer Reviews"
            className="h-14 md:h-24 w-auto object-contain"
          />
        </div>

        <button
          className="bg-wosnik-accent hover:bg-wosnik-accent/80 text-wosnik-dark font-inter font-medium text-sm px-8 py-3 rounded border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Schedule Your Consultation
        </button>
      </div>
    </section>
  );
};
