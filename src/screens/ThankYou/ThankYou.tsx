import React from "react";
import { CheckCircle } from "lucide-react";

export const ThankYou = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-wosnik-light flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>

          <h1 className="font-heading text-wosnik-dark text-4xl md:text-5xl font-normal mb-4">
            Your Request Has Been Received
          </h1>

          <p className="font-body text-wosnik-dark text-lg mb-8">
            A member of our team will contact you shortly.
          </p>

          <div className="bg-wosnik-accent/20 border border-wosnik-accent/40 rounded-lg p-6 mb-8 text-left">
            <p className="font-heading text-wosnik-dark font-semibold text-lg mb-4">Next Steps:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-wosnik-dark mr-3 mt-0.5 flex-shrink-0" />
                <p className="font-body text-wosnik-dark text-sm">Watch for a call or email reply</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-wosnik-dark mr-3 mt-0.5 flex-shrink-0" />
                <p className="font-body text-wosnik-dark text-sm">Gather any IRS notices, tax returns, or financial documents</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-wosnik-dark mr-3 mt-0.5 flex-shrink-0" />
                <p className="font-body text-wosnik-dark text-sm">We'll review your situation and outline a clear resolution plan</p>
              </li>
            </ul>
          </div>

          <a
            href="/"
            className="inline-block bg-wosnik-accent hover:bg-wosnik-accent/80 text-wosnik-dark font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px]"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};
