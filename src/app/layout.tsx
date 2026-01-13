import type { Metadata, Viewport } from 'next';
import { Work_Sans, Syne } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { SkipLink } from '@/components/ui';
import './globals.css';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://dzstransport.com'
  ),
  title: {
    default: 'DZS Transport | Safe & Reliable Student Transportation',
    template: '%s | DZS Transport',
  },
  description:
    'DZS Transport provides safe, reliable student transportation services. Full service transportation, charter bus rental, and consulting services.',
  keywords: [
    'student transportation',
    'school bus services',
    'charter bus rental',
    'transportation consulting',
    'DZS Transport',
    'school transportation',
    'student busing',
  ],
  authors: [{ name: 'DZS Transport' }],
  creator: 'DZS Transport',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'DZS Transport',
    title: 'DZS Transport | Safe & Reliable Student Transportation',
    description:
      'Safe, reliable student transportation services. Your trusted partner in getting students to school safely.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DZS Transport | Safe & Reliable Student Transportation',
    description:
      'Safe, reliable student transportation services. Your trusted partner in getting students to school safely.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#ff2c2c',
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${syne.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-white font-sans text-slate-800 antialiased">
        <SkipLink />
        <Header />
        <main id="main-content" className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
