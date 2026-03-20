import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Tensai Biruda Corporation. Request a free consultation or quote for your construction project. Call (0917) 883 6724 or email tensaibirudacorp@gmail.com.',
};

const contactCards = [
  {
    title: 'Call Us',
    lines: [
      { text: '(0917) 883 6724', href: 'tel:+639178836724' },
      { text: '(02) 8735 0230', href: 'tel:+6287350230' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Email Us',
    lines: [{ text: 'tensaibirudacorp@gmail.com', href: 'mailto:tensaibirudacorp@gmail.com' }],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Visit Us',
    lines: [
      { text: 'Unit 2-3 Lot 19, Block 4', href: null },
      { text: 'De Leon Street, Brgy. Holy Spirit', href: null },
      { text: 'Quezon City, 1127', href: null },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1A1A1A] overflow-hidden"
        aria-label="Contact page hero"
      >
        <div className="absolute inset-0 z-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Contact Us
          </h1>
          <p className="mt-5 text-gray-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to start your project? We&rsquo;d love to hear from you. Reach out and
            a member of our team will respond within one business day.
          </p>
        </div>
      </section>

      {/* ===== CONTACT CARDS ===== */}
      <section
        className="py-14 bg-gray-50"
        aria-label="Contact information"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactCards.map(({ title, lines, icon }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm flex flex-col items-start gap-4"
              >
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <h2 className="text-[#1A1A1A] font-bold text-sm mb-3">{title}</h2>
                  <address className="not-italic space-y-1">
                    {lines.map(({ text, href }) =>
                      href ? (
                        <a
                          key={text}
                          href={href}
                          className="block text-gray-500 text-sm hover:text-red-600 transition-colors duration-200"
                        >
                          {text}
                        </a>
                      ) : (
                        <p key={text} className="text-gray-500 text-sm">{text}</p>
                      )
                    )}
                  </address>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORM + MAP ===== */}
      <section
        className="py-16 lg:py-24 bg-white"
        aria-labelledby="contact-form-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            {/* Form */}
            <div>
              <p className="text-red-600 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                Send a Message
              </p>
              <h2
                id="contact-form-heading"
                className="text-[#1A1A1A] font-bold text-2xl sm:text-3xl mb-2"
              >
                Tell Us About Your Project
              </h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Fill in the form below and our team will prepare a tailored response for
                your enquiry. Fields marked with <span className="text-red-500" aria-hidden="true">*</span> are required.
              </p>
              <ContactForm />
            </div>

            {/* Map + office info */}
            <div className="flex flex-col gap-8">
              {/* Google Maps embed placeholder */}
              <div
                className="relative w-full h-72 sm:h-80 bg-gray-100 rounded-xl overflow-hidden border border-gray-200"
                role="region"
                aria-label="Office location map"
              >
                <iframe
                  title="Tensai Biruda Corporation office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5!2d121.06!3d14.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQxJzI0LjAiTiAxMjHCsDAzJzM2LjAiRQ!5e0!3m2!1sen!2sph!4v1620000000000!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Office hours & info */}
              <div className="bg-gray-50 rounded-xl p-7 border border-gray-100">
                <h3 className="text-[#1A1A1A] font-bold text-sm tracking-widest uppercase mb-5">
                  Office Information
                </h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Business Hours</p>
                    <p className="text-gray-700 text-sm">Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM</p>
                    <p className="text-gray-500 text-xs mt-1">Saturdays by appointment</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Response Time</p>
                    <p className="text-gray-700 text-sm">Within 1 business day</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Service Areas</p>
                    <p className="text-gray-700 text-sm">Metro Manila &amp; surrounding provinces</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
