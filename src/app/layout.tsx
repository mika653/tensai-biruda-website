import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['300', '500', '700'],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Tensai Biruda Corporation | Design & Build Contractor Philippines',
    template: '%s | Tensai Biruda Corporation',
  },
  description:
    'Tensai Biruda Corporation (TBC) is a premier general contractor specializing in design & build and engineering services. Serving residential, commercial, industrial, and office construction projects across the Philippines.',
  keywords: [
    'construction company Philippines',
    'design and build contractor',
    'general contractor Quezon City',
    'residential construction',
    'commercial construction',
    'construction management',
    'Tensai Biruda Corporation',
    'TBC',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    siteName: 'Tensai Biruda Corporation',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1A1A1A] font-body">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-red-600 focus:text-white focus:rounded focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
