import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Tensai Biruda Corporation offers General Construction, Trade Construction, Construction Management, and Specialized Construction including structural retro-fitting.',
};

const services = [
  {
    id: 'general-construction',
    number: '01',
    title: 'General Construction',
    tagline: 'End-to-end construction for every project type',
    description:
      'We provide comprehensive general construction services across a wide range of project types. From breaking ground to handing over the keys, TBC manages every phase with precision and accountability.',
    details: [
      'Industrial facilities and warehouses',
      'Residential buildings and subdivisions',
      'Commercial buildings and business centres',
      'Office buildings and corporate campuses',
      'Healthcare facilities and clinics',
      'Recreational and leisure facilities',
    ],
    image: '/images/projects/filinvest-3storey/render-1.jpg',
    imageAlt: 'Filinvest 3-storey residential building — general construction project by TBC',
  },
  {
    id: 'trade-construction',
    number: '02',
    title: 'Trade Construction',
    tagline: 'Premium interior fit-outs and retail spaces',
    description:
      'TBC specializes in high-quality trade construction — delivering interior fit-outs, mall showrooms, and retail stores that reflect brand identity and create exceptional customer experiences.',
    details: [
      'Interior fit-outs for all occupancy types',
      'Mall showrooms and brand flagships',
      'Retail stores and commercial fit-outs',
      'Restaurant and hospitality interiors',
      'Bespoke millwork and custom joinery',
      'Brand-aligned design execution',
    ],
    image: '/images/projects/helly-hansen-glorieta/photo-1.jpg',
    imageAlt: 'Helly Hansen Glorieta retail fit-out — trade construction project by TBC',
  },
  {
    id: 'construction-management',
    number: '03',
    title: 'Construction Management',
    tagline: 'Professional project oversight from start to finish',
    description:
      'Our construction management service gives clients expert supervision and coordination across all project phases. We safeguard your budget, schedule, and quality standards while you focus on your business.',
    details: [
      'Pre-construction planning and scheduling',
      'Contractor procurement and management',
      'Budget control and cost management',
      'Quality assurance and compliance',
      'Health, safety, and environmental oversight',
      'Progress reporting and stakeholder communication',
    ],
    image: '/images/projects/12-villas-bataan/site-1.jpg',
    imageAlt: '12 Villas Bataan construction site — construction management by TBC',
  },
  {
    id: 'specialized-construction',
    number: '04',
    title: 'Specialized Construction',
    tagline: 'Structural retro-fitting and complex structural works',
    description:
      'Our specialized construction team tackles the most technically demanding projects — particularly structural retro-fitting to bring existing buildings up to modern safety and performance standards.',
    details: [
      'Structural retro-fitting and strengthening',
      'Seismic upgrades and reinforcement',
      'Foundation repair and underpinning',
      'Building envelope restoration',
      'Complex structural modifications',
      'Compliance upgrades for existing structures',
    ],
    image: '/images/projects/house-renovation-2storey/render-front.jpg',
    imageAlt: 'House renovation render — specialized construction by TBC',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Design',
    description:
      'We work with you to develop your vision — conducting site analysis, feasibility studies, and producing preliminary design concepts.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'Detailed planning, engineering, budgeting, and scheduling ensure every element is accounted for before construction begins.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Our skilled construction teams execute the plan with precision — managing all trades, materials, and quality checkpoints.',
  },
  {
    step: '04',
    title: 'Deliver',
    description:
      'We conduct thorough inspections, obtain all clearances, and hand over a completed project that meets every specification.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1A1A1A] overflow-hidden"
        aria-label="Services hero"
      >
        <div className="absolute inset-0 z-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            What We Offer
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Our Services
          </h1>
          <p className="mt-5 text-gray-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive construction solutions from design conception through project
            delivery — all under one trusted roof.
          </p>
        </div>
      </section>

      {/* ===== SERVICES DETAIL ===== */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Service descriptions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
          {services.map(({ id, number, title, tagline, description, details, image, imageAlt }, index) => (
            <article
              key={id}
              id={id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center
                ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Text side */}
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-red-600/30 font-bold text-5xl leading-none select-none" aria-hidden="true">
                    {number}
                  </span>
                  <div className="h-px flex-1 bg-red-100" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-[#1A1A1A] font-bold text-2xl sm:text-3xl mb-2">{title}</h2>
                <p className="text-red-600 text-sm font-semibold tracking-wide mb-5">{tagline}</p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                  {description}
                </p>
                <ul className="space-y-3">
                  {details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual side */}
              <div className="relative rounded-2xl overflow-hidden min-h-80 lg:min-h-96">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                  >
                    Enquire About This Service
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A]" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeading
              eyebrow="How We Work"
              title="Our Process"
              subtitle="A proven four-step methodology that ensures every project is delivered on time, on budget, and to the highest standard."
              centered
              light
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative">
            {/* Connector line (desktop) */}
            <div
              className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-red-600/30 z-0"
              aria-hidden="true"
            />
            {processSteps.map(({ step, title, description }, index) => (
              <div
                key={step}
                className="relative z-10 flex flex-col items-center text-center px-6"
              >
                {/* Step circle */}
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-red-600/30">
                  <span className="text-white font-bold text-lg" aria-hidden="true">{step}</span>
                </div>
                {/* Arrow connector on mobile/tablet */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 text-red-600/40" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-gray-50" aria-label="Services call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-600 text-base mb-8 max-w-xl mx-auto">
            Our team will assess your project requirements and recommend the right service
            combination for your goals and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-colors duration-200 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
          >
            Get a Free Consultation
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
