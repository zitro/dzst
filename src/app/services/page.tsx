import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore DZS Transport services: full service transportation, alternative transportation, consulting, and charter bus rental.',
};

const services = [
  {
    id: 'student',
    title: 'Student Transportation',
    description:
      'DZS Transport helps school systems and districts facing decreased budgets coordinate transportation in a cost-effective way, saving an average of 10-30%.',
    features: [
      'Public and private school transportation',
      'Day treatment and partial hospitalization support',
      'Full routing and logistics management',
      'Proprietary scheduling software',
      'Real-time GPS tracking (AVL)',
      'Trained monitors for students needing assistance',
    ],
    image: 'https://images.pexels.com/photos/14044466/pexels-photo-14044466.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'elderly',
    title: 'Elderly Services',
    description:
      'Mobility assistance helping seniors maintain independence and active lifestyles through local and long-distance transportation.',
    features: [
      'Door-to-door transportation',
      'Specialized services for limited mobility',
      'Access to medical care and appointments',
      'Shopping and errand transportation',
      'Social activity transportation',
      'Customized solutions for individual needs',
    ],
    image: 'https://images.pexels.com/photos/4452019/pexels-photo-4452019.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'medical',
    title: 'Non-Emergency Medical Transportation',
    description:
      'Safe, dependable door-to-door medical transport available 24/7 across the NJ and NY Metro Area.',
    features: [
      '24/7 dispatcher and customer service',
      'GPS and custom scheduling technology',
      'Two-day service activation',
      'Insurance liability coverage',
      'On-site vehicle maintenance facility',
      'Professional driver training programs',
    ],
    image: 'https://images.pexels.com/photos/1386484/pexels-photo-1386484.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'charter',
    title: 'Private Charters',
    description:
      'Motor coach transportation for groups, from local transfers to cross-country trips with professional, licensed drivers.',
    features: [
      'Modern fleet of vehicles',
      'Professional licensed drivers',
      'Competitive rates',
      'Safety-focused operations',
      'Field trips and athletic events',
      'Corporate and group outings',
    ],
    image: 'https://images.pexels.com/photos/14044466/pexels-photo-14044466.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'consulting',
    title: 'Transportation Consulting',
    description:
      'Custom solutions addressing operational challenges including fleet maintenance, management, and route optimization.',
    features: [
      'Fleet assessment and recommendations',
      'Route efficiency analysis',
      'Compliance auditing',
      'Driver training program development',
      'Technology implementation guidance',
      'Budget optimization strategies',
    ],
    image: 'https://images.pexels.com/photos/4452019/pexels-photo-4452019.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/1386484/pexels-photo-1386484.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="School bus services"
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
              Our Services
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Comprehensive transportation solutions tailored to meet the unique
              needs of schools, districts, and organizations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <FadeIn
                animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="relative h-80 overflow-hidden rounded-lg lg:h-[450px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn
                animation={index % 2 === 0 ? 'slide-in-right' : 'slide-in-left'}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div>
                  <h2
                    className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {service.title}
                  </h2>
                  <p className="mb-6 text-lg text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-slate-600"
                      >
                        <svg
                          className="mt-1 h-5 w-5 flex-shrink-0 text-dzred-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-sm bg-dzred-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-dzred-600"
                  >
                    Request Information
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-dzred-500 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="text-center">
            <h2
              className="mb-4 text-3xl font-bold text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to Get Started?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/90">
              Contact us today to discuss how our services can meet your
              transportation needs.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-dzred-500 transition-colors hover:bg-slate-100"
              >
                Contact Us
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center rounded-sm border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-dzred-500"
              >
                Call (123) 456-7890
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
