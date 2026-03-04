import React from "react";

export const AttorneySection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#efefef] py-8 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-2xl md:text-4xl font-normal text-center mb-8">
          Meet Your Oklahoma Tax Attorneys
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Photo */}
          <div className="w-full">
            <img
              src="/attorneys.webp"
              alt="Justin Hutton and Kristin Hutton, Oklahoma Tax Attorneys"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col space-y-4">
            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Attorneys Justin and Kristin Hutton bring going on two decades of exclusive IRS tax resolution experience — backed by national firm backgrounds and senior leadership roles in tax law practice.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Prior to founding Hutton Tax Solutions, both attorneys held leadership positions at nationally recognized tax resolution firms, where they trained and managed teams of attorneys handling IRS matters across the country. That depth of institutional knowledge now works directly for you.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Going on two decades of direct experience representing clients in IRS matters, the Huttons provide affordable, personalized strategies tailored to each client's financial situation. They work closely with you to protect assets and resolve IRS tax debt efficiently.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              From IRS tax debt and lien challenges to IRS settlement negotiations and levy protections, Attorneys Justin and Kristin Hutton combine deep legal knowledge, strategic leadership, and direct attorney access to guide clients safely through IRS issues.
            </p>

            <div className="pt-2">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-wosnik-accent hover:bg-wosnik-accent/80 text-wosnik-dark font-inter font-medium text-sm px-8 py-3 rounded border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
              >
                Schedule Your Free Tax Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
