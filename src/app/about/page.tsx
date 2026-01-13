import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about DZS Transport - decades of experience in safe, reliable student transportation services.',
};

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '3,500+', label: 'People Daily' },
  { value: '10-30%', label: 'Cost Savings' },
  { value: 'NJ & NY', label: 'Service Area' },
];

const teamValues = [
  {
    title: 'Respect',
    description:
      'We treat our clients, students, employees, and community members with dignity. We believe everyone deserves respectful treatment.',
  },
  {
    title: 'Empathy',
    description:
      'We strive to understand diverse perspectives and challenges faced by our employees and clients, approaching situations from different viewpoints.',
  },
  {
    title: 'Accountability',
    description:
      'We transport over 3,500 people daily and hold ourselves responsible for safe, reliable service. Accountability means fulfilling commitments and doing work to our full capability.',
  },
  {
    title: 'Safety',
    description:
      'Every decision we make prioritizes the safety and well-being of those we transport. From rigorous driver training to regular vehicle maintenance, safety is at the core of everything we do.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/14044466/pexels-photo-14044466.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="School bus fleet"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <h1
              className="mb-4 text-4xl font-bold text-white md:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              About DZS Transport
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              The Journey To Reaching A Student&apos;s Full Potential Starts Here.
              We provide safe, reliable and cost-effective transportation to
              those who need it most.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div
                    className="text-4xl font-bold text-dzred-500 md:text-5xl"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-600">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn animation="slide-in-left">
              <div className="relative h-96 overflow-hidden rounded-lg lg:h-[500px]">
                <Image
                  src="https://images.pexels.com/photos/4452019/pexels-photo-4452019.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="School bus on the road"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn animation="slide-in-right">
              <div>
                <h2
                  className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Our Story
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    DZS Transport recognizes that school systems facing budget
                    constraints can save 10-30% by outsourcing transportation
                    without sacrificing quality, safety, or reliability.
                  </p>
                  <p>
                    We specialize in serving public and private schools, day
                    treatment plans, partial hospitalization programs, and special
                    needs initiatives. We customize solutions from management
                    expertise to full turnkey operations.
                  </p>
                  <p>
                    Our services include student transportation, elderly mobility
                    services, non-emergency medical transportation (available 24/7),
                    charter transport, transit services and consulting, and
                    developmentally disabled services.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2
              className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Mission
            </h2>
            <p className="text-xl text-slate-600">
              The mission of DZS Transport is to provide safe, reliable and
              cost-effective transportation to those who need it most.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-12 text-center">
            <h2
              className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              These values guide everything we do at DZS Transport.
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2">
            {teamValues.map((value, index) => (
              <FadeIn key={value.title} delay={index * 100}>
                <div className="rounded-lg border border-slate-200 bg-white p-8">
                  <h3
                    className="mb-3 text-xl font-semibold text-slate-900"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dzred-500 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="text-center">
            <h2
              className="mb-4 text-3xl font-bold text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Partner With Us
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/90">
              Ready to experience the DZS Transport difference? Contact us today
              to discuss your transportation needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-dzred-500 transition-colors hover:bg-slate-100"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
