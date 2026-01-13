import type { Metadata } from 'next';
import { FadeIn } from '@/components/ui';
import { ContactForm } from '@/components/forms';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with DZS Transport for student transportation services, charter bus rental, or consulting.',
};

const contactInfo = [
  {
    title: 'Phone',
    value: '908.902.1418',
    href: 'tel:+19089021418',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
  {
    title: 'Email',
    value: 'info@dzstransport.com',
    href: 'mailto:info@dzstransport.com',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    title: 'Address',
    value: '60 Avenue A, Newark, New Jersey',
    href: 'https://maps.google.com/?q=60+Avenue+A+Newark+New+Jersey',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Hours',
    value: 'Mon-Fri: 6AM - 6PM',
    href: null,
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h1
              className="mb-4 text-4xl font-bold text-white md:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contact Us
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Have questions about our services? We would love to hear from you.
              Reach out and we will get back to you as soon as possible.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <FadeIn animation="slide-in-left">
              <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
                <h2
                  className="mb-6 text-2xl font-bold text-slate-900"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn animation="slide-in-right">
              <div>
                <h2
                  className="mb-6 text-2xl font-bold text-slate-900"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Get in Touch
                </h2>
                <div className="mb-8 space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-dzred-50 text-dzred-500">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-slate-600 transition-colors hover:text-dzred-500"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-600">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="overflow-hidden rounded-lg border border-slate-200">
                  <iframe
                    title="DZS Transport Location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-74.1750%2C40.7350%2C-74.1650%2C40.7450&layer=mapnik&marker=40.7400%2C-74.1700"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <a
                    href="https://www.openstreetmap.org/?mlat=40.7400&mlon=-74.1700#map=16/40.7400/-74.1700"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-slate-50 px-4 py-2 text-center text-sm text-slate-600 transition-colors hover:text-dzred-500"
                  >
                    View Larger Map
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
