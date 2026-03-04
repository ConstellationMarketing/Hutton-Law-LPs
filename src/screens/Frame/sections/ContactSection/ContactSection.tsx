import React, { useState } from "react";
import { Phone, Mail, MapPin, ClipboardList } from "lucide-react";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

export const ContactSection = (): JSX.Element => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data: Record<string, string> = {
      "form-name": "hutton-contact",
    };

    Array.from(form.elements).forEach((el) => {
      const input = el as HTMLInputElement | HTMLTextAreaElement;
      if (input.name) data[input.name] = input.value;
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });

      if (response.ok || response.redirected) {
        window.location.href = "/thank-you";
      } else {
        setError("Something went wrong. Please try again or call us directly.");
        setSubmitting(false);
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-wosnik-light py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal mb-4">
            Contact Hutton Tax Solutions
          </h2>
          <p className="font-body text-wosnik-dark text-lg">
            Let's discuss your case — Your Local Oklahoma IRS Tax Resolution Firm
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-12">
          {/* Contact Form */}
          <div className="bg-white p-5 md:p-8 rounded-lg shadow-md">
            <h3 className="font-heading text-wosnik-dark text-xl md:text-2xl font-normal mb-4">
              Request a Free Consultation
            </h3>
            <form
              id="contact-form"
              name="hutton-contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="hutton-contact" />
              <input type="hidden" name="bot-field" />

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

              {error && (
                <p className="font-body text-red-600 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-wosnik-accent hover:bg-wosnik-accent/80 disabled:opacity-60 text-wosnik-dark font-inter font-medium text-sm px-4 py-3 rounded border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px] inline-block"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-5 md:p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-wosnik-dark text-xl md:text-2xl font-normal mb-4">
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

            <div className="bg-white p-5 md:p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-wosnik-dark text-xl md:text-2xl font-normal mb-4">
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

            <div className="bg-white p-5 md:p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-wosnik-dark text-xl md:text-2xl font-normal mb-4">
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.998707764552!2d-97.47660372318471!3d35.652403472596596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21fefaf39b75b%3A0x8840318d145687f!2sHutton%20Tax%20Solutions!5e0!3m2!1sen!2srs!4v1771946331035!5m2!1sen!2srs"
            width="100%"
            height="250"
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
