import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Tensai Biruda Corporation | Design & Build Contractor Philippines',
  description:
    'TBC is a premier design & build and general contracting firm delivering residential, commercial, and industrial construction projects across the Philippines.',
};

const featuredSlugs = [
  'bataan-beach-house',
  '12-villas-bataan',
  'filinvest-3storey',
  'helly-hansen-glorieta',
  'ayala-alabang',
  'spda-renovation',
];

const featuredProjects = featuredSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => p !== undefined);

const services = [
  {
    title: 'General Construction',
    description:
      'End-to-end construction services for industrial, residential, commercial, office, warehouse, healthcare, and recreational facilities.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Trade Construction',
    description:
      'Specialized interior fit-outs, mall showrooms, and retail stores — crafted to brand standards with precision and style.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Construction Management',
    description:
      'Professional oversight of your construction project from planning through delivery — on time, on budget, and to specification.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Specialized Construction',
    description:
      'Structural retro-fitting and complex structural works — applying innovative technologies for longevity and safety.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '11+', label: 'Projects Delivered to Spec' },
  { value: '5+', label: 'Years of Expertise' },
  { value: '4', label: 'Specialized Disciplines' },
  { value: '100%', label: 'On-Time Delivery' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/bataan-beach-house/render.jpg"
            alt="Bataan Beach House render — TBC project"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 text-center">
          <p className="inline-block text-red-400 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-in">
            Tensai Biruda Corporation
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up">
            Building Excellence,
            <br />
            <span className="text-gradient-red">One Project</span> at a Time
          </h1>
          <p className="text-gray-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up">
            Premier design &amp; build contractor delivering residential, commercial, and
            industrial construction projects to global standards across the Philippines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold rounded transition-colors duration-200 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              View Our Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded transition-colors duration-200 text-sm sm:text-base backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Get Your Free Estimate
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-[#1A1A1A] py-10 lg:py-12" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center lg:px-8">
                <p className="text-3xl sm:text-4xl font-bold text-red-500 mb-1">{value}</p>
                <p className="text-gray-400 text-sm tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SUMMARY ===== */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="Excellence Built Into Every Detail"
                subtitle="Tensai Biruda Corporation — Japanese for 'Excellent Builder' — is a Filipino general contractor bringing Japanese-inspired precision and craftsmanship to every project we undertake."
              />
              <div className="mt-8 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  We specialize in design &amp; build and engineering services — providing
                  clients with a single, trusted partner from initial site analysis and
                  feasibility studies through to final handover.
                </p>
                <p>
                  Our portfolio spans industrial facilities, residential homes, commercial
                  buildings, office spaces, warehouses, healthcare facilities, and
                  recreational projects.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] hover:bg-red-600 text-white text-sm font-semibold rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                >
                  About TBC
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Mobile: single featured image */}
            <div className="lg:hidden relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/images/projects/filinvest-3storey/exterior-1.jpg"
                alt="Filinvest 3-storey residential project by TBC"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Desktop: image collage */}
            <div className="relative hidden lg:grid grid-cols-2 gap-4 h-96">
              <div className="relative rounded-lg overflow-hidden row-span-2">
                <Image
                  src="/images/projects/filinvest-3storey/exterior-1.jpg"
                  alt="Filinvest 3-storey residential project"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/projects/12-villas-bataan/interior-1.jpg"
                  alt="12 Villas Bataan interior"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/projects/helly-hansen-glorieta/photo-1.jpg"
                  alt="Helly Hansen Glorieta fit-out"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 lg:py-28 bg-gray-50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeading
              eyebrow="What We Do"
              title="Our Services"
              subtitle="From ground-breaking to ribbon-cutting, TBC delivers comprehensive construction services tailored to your project's unique needs."
              centered
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {services.map(({ title, description, icon }) => (
              <article
                key={title}
                className="bg-white rounded-lg p-7 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group animate-fade-in-up"
              >
                <div className="w-14 h-14 bg-red-50 group-hover:bg-red-600 rounded-lg flex items-center justify-center mb-5 text-red-600 group-hover:text-white transition-colors duration-300">
                  {icon}
                </div>
                <h3 className="text-[#1A1A1A] font-bold text-base mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-sm font-semibold rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2"
            >
              View All Services
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Our Portfolio"
              title="Featured Projects"
              subtitle="A selection of our most impactful work — from luxury residences to premium commercial fit-outs."
            />
            <Link
              href="/projects"
              className="flex-shrink-0 inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
            >
              See All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 lg:py-28 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeading
              eyebrow="Client Feedback"
              title="What Our Clients Say"
              subtitle="We take pride in building lasting relationships through exceptional work and transparent communication."
              centered
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "TBC delivered our beach house project beyond our expectations. Their attention to detail and commitment to the timeline was impressive. We felt confident every step of the way.",
                name: "Property Owner",
                project: "Bataan Beach House",
              },
              {
                quote: "From design through construction, the TBC team was professional, responsive, and transparent with costs. Our 3-storey residence was completed on schedule and to a very high standard.",
                name: "Homeowner",
                project: "Filinvest-1 Residential",
              },
              {
                quote: "The fit-out for our retail store was executed flawlessly. TBC understood the brand requirements and delivered a space that our customers love. Highly recommend for commercial projects.",
                name: "Retail Client",
                project: "Commercial Fit-out",
              },
            ].map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col"
              >
                <div className="flex gap-1 text-red-500 mb-4" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-[#1A1A1A] font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{testimonial.project}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-20 lg:py-28 bg-[#1A1A1A] overflow-hidden" aria-label="Call to action">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0 opacity-5" aria-hidden="true">
          <div className="absolute top-0 left-0 w-64 h-64 bg-red-600 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-red-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Start Your Project
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Build Your Vision?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10">
              Let&rsquo;s discuss your project requirements. From feasibility studies to
              final delivery, TBC is your trusted partner for exceptional construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-colors duration-200 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
              >
                Schedule a Site Visit
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="tel:+639178836724"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded transition-colors duration-200 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
            </div>

            {/* Contact quick info */}
            <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Phone</p>
                <a href="tel:+639178836724" className="text-white text-sm font-medium hover:text-red-400 transition-colors">
                  (0917) 883 6724
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:tensaibirudacorp@gmail.com" className="text-white text-sm font-medium hover:text-red-400 transition-colors break-all">
                  tensaibirudacorp@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Location</p>
                <p className="text-white text-sm font-medium">Quezon City, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
