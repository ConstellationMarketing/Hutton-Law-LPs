import React from "react";
import { Phone, Mail, MapPin, ClipboardList } from "lucide-react";

export const ContactSection = (): JSX.Element => {
  return (
    <section id="contact" className="w-full bg-wosnik-light py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal mb-4">
            Contact Hutton Tax Solutions
          </h2>
          <p className="font-body text-wosnik-dark text-lg">
            Let's discuss your case — Your Local Oklahoma IRS Tax Resolution Firm
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-heading text-wosnik-dark text-2xl font-normal mb-6">
              Request a Free Consultation
            </h3>
            <form
              id="contact-form"
              name="hutton-form"
              action="https://usebasin.com/f/700c92dca26f"
              method="POST"
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-wosnik-accent"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-wosnik-accent"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-wosnik-accent"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-wosnik-accent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-wosnik-accent hover:bg-wosnik-accent/80 text-wosnik-dark font-inter font-medium text-sm px-8 py-3 rounded border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-wosnik-dark text-2xl font-normal mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-wosnik-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:4053789481" className="font-body text-wosnik-dark font-medium hover:text-wosnik-accent transition-colors">
                      (405) 378-9481
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-wosnik-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <a href="mailto:justin@huttontax.com" className="font-body text-wosnik-dark font-medium hover:text-wosnik-accent transition-colors">
                      justin@huttontax.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-wosnik-dark text-2xl font-normal mb-6">
                Office Location
              </h3>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-wosnik-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-wosnik-dark">422 E. 2nd St.</p>
                  <p className="font-body text-wosnik-dark">Edmond, OK 73034</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-wosnik-dark text-2xl font-normal mb-6">
                What To Expect
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ClipboardList className="w-5 h-5 text-wosnik-accent mr-3 mt-0.5 flex-shrink-0" />
                  <p className="font-body text-wosnik-dark text-sm">Watch for a call or email reply</p>
                </li>
                <li className="flex items-start">
                  <ClipboardList className="w-5 h-5 text-wosnik-accent mr-3 mt-0.5 flex-shrink-0" />
                  <p className="font-body text-wosnik-dark text-sm">Gather any IRS notices, tax returns, or financial documents</p>
                </li>
                <li className="flex items-start">
                  <ClipboardList className="w-5 h-5 text-wosnik-accent mr-3 mt-0.5 flex-shrink-0" />
                  <p className="font-body text-wosnik-dark text-sm">We'll review your situation and outline a clear resolution plan</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=422+E+2nd+St,+Edmond,+OK+73034&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map view of Hutton Tax Solution, OK Office"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
