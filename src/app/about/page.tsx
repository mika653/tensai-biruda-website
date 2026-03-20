import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Tensai Biruda Corporation — our story, mission, vision, and core values. We are a Filipino design & build contractor delivering excellence to global standards.',
};

const coreValues = [
  {
    title: 'Innovative Design',
    description:
      'We embrace creative thinking and modern design principles to deliver spaces that are both functional and inspiring.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Quality Craftsmanship',
    description:
      'Every project is executed to international standards, with meticulous attention to detail and pride in the work we deliver.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Enduring Relationships',
    description:
      'We build partnerships as sturdy as our structures — fostering long-term client relationships built on trust and results.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Professionalism',
    description:
      'We conduct every engagement with integrity, accountability, and the highest standards of professional conduct.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Transparent Communication',
    description:
      'We keep clients informed at every stage — no surprises, just clear, honest dialogue from start to finish.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Sustainability',
    description:
      'We design and build with the future in mind — creating durable, resource-efficient structures that stand the test of time.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const whyChooseUs = [
  {
    title: 'Design & Build Expertise',
    description: 'Single-point accountability from concept to completion — reducing complexity, cost, and risk for our clients.',
  },
  {
    title: 'Engineering-First Approach',
    description: 'Every project begins with rigorous site analysis and feasibility studies to ensure structural integrity and value.',
  },
  {
    title: 'Filipino Pride, Global Standards',
    description: 'We are dedicated to upgrading Filipino architectural design and workmanship to meet and exceed international benchmarks.',
  },
  {
    title: 'Diverse Project Portfolio',
    description: 'From beach houses to mall fit-outs to office renovations — our breadth of experience ensures we can handle any project type.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1A1A1A] overflow-hidden"
        aria-label="About page hero"
      >
        <div className="absolute inset-0 z-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            About Us
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Who We Are
          </h1>
          <p className="mt-5 text-gray-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            A Filipino general contractor built on the Japanese philosophy of excellence —
            delivering precision craftsmanship and innovative design to every project.
          </p>
        </div>
      </section>

      {/* ===== COMPANY STORY ===== */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/projects/filinvest-3storey/exterior-2.jpg"
                alt="TBC completed residential project"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Red accent bar */}
              <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-red-600 rounded-r-full" aria-hidden="true" />
            </div>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Built on a Foundation of Excellence"
              />
              <div className="mt-7 space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Tensai Biruda Corporation was founded with a singular vision: to elevate
                  construction standards in the Philippines. Our name — &ldquo;Tensai Biruda&rdquo;
                  from Japanese — translates to &ldquo;Excellent Builder,&rdquo; a commitment we
                  honour in every project we undertake.
                </p>
                <p>
                  As a general contractor specializing in design &amp; build and engineering
                  services, we offer clients comprehensive support across the full project
                  lifecycle — from site analysis and feasibility studies through preliminary
                  design, construction management, and final delivery.
                </p>
                <p>
                  Our portfolio encompasses industrial, residential, commercial, office,
                  warehouse, healthcare, and recreational projects — demonstrating our
                  ability to adapt and excel across diverse construction disciplines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-20 lg:py-28 bg-gray-50" aria-labelledby="mission-vision-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeading
              eyebrow="Our Purpose"
              title="Mission &amp; Vision"
              centered
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <article className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-600 rounded-l-2xl" aria-hidden="true" />
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-[#1A1A1A] font-bold text-2xl mb-4" id="mission-heading">Our Mission</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                To provide secure, sustainable, and top-notch construction projects that
                exceed client expectations. We are guided by our core values of:
              </p>
              <ul className="space-y-2.5">
                {[
                  'Innovative design in every project',
                  'Quality craftsmanship to global standards',
                  'Enduring client relationships',
                  'Professionalism in all engagements',
                  'Transparent, honest communication',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            {/* Vision */}
            <article className="bg-[#1A1A1A] rounded-2xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-6 text-red-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-white font-bold text-2xl mb-4" id="vision-heading">Our Vision</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
                To become the design &amp; build company of choice in the Philippines, setting
                new benchmarks for architectural excellence and construction quality.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Upgrade Filipino architectural design and workmanship',
                  'Be the #1 design & build company of choice',
                  'Create lasting business partnerships',
                  'Use innovative technologies for premium craftsmanship',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-5 h-5 bg-red-600/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeading
              eyebrow="What Drives Us"
              title="Core Values"
              subtitle="These principles are the foundation of every decision we make and every structure we build."
              centered
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map(({ title, description, icon }) => (
              <article
                key={title}
                className="flex gap-5 p-6 rounded-xl border border-gray-100 hover:border-red-100 hover:bg-red-50/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="text-[#1A1A1A] font-bold text-sm mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE TBC ===== */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A]" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <SectionHeading
                eyebrow="Why TBC"
                title="Why Choose Tensai Biruda?"
                subtitle="We combine Japanese-inspired precision with Filipino craftsmanship to deliver results that endure."
                light
              />
              <div className="mt-10 space-y-6">
                {whyChooseUs.map(({ title, description }, index) => (
                  <div key={title} className="flex gap-5">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 sm:h-96 lg:h-[520px] rounded-2xl overflow-hidden">
              <Image
                src="/images/projects/bataan-beach-house/night-1.jpg"
                alt="TBC night render of Bataan Beach House"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-red-600" aria-label="About page call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-red-100 text-base mb-8 max-w-xl mx-auto">
            Partner with TBC and experience the difference that precision, professionalism,
            and genuine care makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-red-600 font-semibold rounded hover:bg-gray-100 transition-colors duration-200 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-600"
            >
              Contact Us Today
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-red-700 hover:bg-red-800 text-white font-semibold rounded transition-colors duration-200 text-sm border border-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-600"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
