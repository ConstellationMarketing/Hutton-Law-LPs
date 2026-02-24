import React from "react";

export const AttorneySection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#efefef] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-12">
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
          <div className="flex flex-col space-y-6">
            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Attorney Justin Hutton is a seasoned Oklahoma City IRS tax resolution attorney who has helped individuals and businesses navigate tax debt, liens, levies, audits, and settlement programs across the state. Attorney Kristin Hutton focuses on federal and state tax issues, assisting clients with IRS enforcement actions, tax settlements, and structured payment plans. Together, they provide comprehensive guidance for complex tax matters.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              With years of direct experience representing clients in IRS matters, the Huttons provide personalized strategies tailored to each client's financial situation. They work closely with you to protect assets, stop garnishments, and resolve tax debt efficiently.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Justin earned his Juris Doctor from the University of Oklahoma College of Law and has over a decade of exclusive tax law practice, including experience with federal tax negotiations. Kristin brings a strong background in IRS resolution and business tax compliance, giving clients comprehensive support for both individual and corporate tax matters.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              From tax debt and lien challenges to settlement negotiations and levy protections, Attorneys Justin and Kristin Hutton combine deep legal knowledge, strategic thinking, and direct attorney access to guide clients safely through IRS issues.
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
