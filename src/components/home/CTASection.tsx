import Link from 'next/link';
import { FadeIn } from '@/components/ui';

export function CTASection() {
  return (
    <section className="bg-dzred-500 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="text-center">
          <h2
            className="mb-4 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Contact us today to learn how DZS Transport can provide safe,
            reliable transportation solutions for your school or organization.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-dzred-500 transition-colors hover:bg-slate-100"
            >
              Contact Us Today
            </Link>
            <a
              href="tel:+19089021418"
              className="inline-flex items-center justify-center rounded-sm border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-dzred-500"
            >
              Call 908.902.1418
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
