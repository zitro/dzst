import Link from 'next/link';

const navigation = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Student Transportation', href: '/services#student' },
    { name: 'Elderly Services', href: '/services#elderly' },
    { name: 'Medical Transportation', href: '/services#medical' },
    { name: 'Private Charters', href: '/services#charter' },
    { name: 'Consulting', href: '/services#consulting' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <nav
          aria-label="Footer navigation"
          className="grid gap-12 lg:grid-cols-4"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span
                className="text-2xl font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="text-dzred-500">DZS</span>
                <span className="text-white"> Transport</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              The Journey To Reaching A Student&apos;s Full Potential Starts
              Here. Safe, reliable and cost-effective transportation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dzred-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-dzred-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dzred-400">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-dzred-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dzred-400">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="tel:+19089021418"
                  className="transition-colors hover:text-dzred-400"
                >
                  908.902.1418
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dzstransport.com"
                  className="transition-colors hover:text-dzred-400"
                >
                  info@dzstransport.com
                </a>
              </li>
              <li>60 Avenue A, Newark, NJ</li>
            </ul>
          </div>
        </nav>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-slate-700 pt-8 lg:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} DZS Transport. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-slate-500 transition-colors hover:text-dzred-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-500 transition-colors hover:text-dzred-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
