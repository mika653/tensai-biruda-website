'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navBg = isHome
    ? isScrolled || isOpen
      ? 'bg-[#1A1A1A] shadow-lg'
      : 'bg-transparent'
    : 'bg-[#1A1A1A] shadow-lg';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
            aria-label="Tensai Biruda Corporation — Home"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded overflow-hidden flex-shrink-0">
              <Image
                src="/images/logo/logo.jpg"
                alt="TBC Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-sm lg:text-base tracking-wider uppercase">
                Tensai Biruda
              </span>
              <span className="text-red-500 text-[10px] lg:text-xs tracking-[0.2em] uppercase font-medium">
                Corporation
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600
                      ${isActive ? 'text-red-500' : 'text-gray-300 hover:text-white'}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-red-600 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
            >
              Get a Free Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 origin-center
                ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded transition-all duration-300
                ${isOpen ? 'opacity-0 scale-x-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 origin-center
                ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-[#1A1A1A] border-t border-white/10 transition-all duration-300 overflow-hidden
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        <ul className="px-4 py-4 space-y-1" role="list">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center px-4 py-3 rounded text-sm font-medium tracking-wide transition-colors duration-200
                    ${isActive
                      ? 'text-red-500 bg-red-600/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                  aria-current={isActive ? 'page' : undefined}
                  tabIndex={isOpen ? 0 : -1}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="px-8 pb-6 pt-2">
          <Link
            href="/contact"
            className="block w-full text-center px-5 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded transition-colors duration-200"
            tabIndex={isOpen ? 0 : -1}
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
