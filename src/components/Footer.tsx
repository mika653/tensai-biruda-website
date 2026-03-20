import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  { label: 'General Construction', anchor: 'general-construction' },
  { label: 'Trade Construction', anchor: 'trade-construction' },
  { label: 'Construction Management', anchor: 'construction-management' },
  { label: 'Specialized Construction', anchor: 'specialized-construction' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="TBC Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-sm tracking-wider uppercase group-hover:text-red-400 transition-colors">
                  Tensai Biruda
                </span>
                <span className="text-red-500 text-[10px] tracking-[0.2em] uppercase font-medium">
                  Corporation
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your premier design &amp; build contractor. Delivering secure, sustainable,
              and top-notch construction projects across the Philippines.
            </p>
            <div className="mt-5 flex items-center gap-1">
              <span className="text-gray-500 text-xs">TBC &mdash;</span>
              <span className="text-gray-500 text-xs italic">
                &ldquo;Excellent Builder&rdquo;
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      aria-hidden="true"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {services.map(({ label, anchor }) => (
                <li key={anchor}>
                  <Link
                    href={`/services#${anchor}`}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      aria-hidden="true"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Contact Us
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5 flex-shrink-0" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Unit 2-3 Lot 19, Block 4,<br />
                  De Leon Street, Brgy. Holy Spirit,<br />
                  Quezon City, 1127
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5 flex-shrink-0" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div className="text-gray-400 text-sm space-y-1">
                  <a href="tel:+639178836724" className="block hover:text-red-400 transition-colors">
                    (0917) 883 6724
                  </a>
                  <a href="tel:+6287350230" className="block hover:text-red-400 transition-colors">
                    (02) 8735 0230
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5 flex-shrink-0" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a
                  href="mailto:tensaibirudacorp@gmail.com"
                  className="text-gray-400 text-sm hover:text-red-400 transition-colors break-all"
                >
                  tensaibirudacorp@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Tensai Biruda Corporation. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs text-center sm:text-right">
            Design &amp; Build &bull; Engineering Services &bull; Construction Management
          </p>
        </div>
      </div>
    </footer>
  );
}
