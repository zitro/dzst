import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui';

const services = [
  {
    id: 'student',
    title: 'Student Transportation',
    description:
      'Cost-effective transportation for public and private schools, with full routing, logistics, and GPS tracking.',
    image: 'https://images.pexels.com/photos/14044466/pexels-photo-14044466.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services#student',
  },
  {
    id: 'elderly',
    title: 'Elderly Services',
    description:
      'Door-to-door mobility assistance helping seniors maintain independence and access medical care.',
    image: 'https://images.pexels.com/photos/4452019/pexels-photo-4452019.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services#elderly',
  },
  {
    id: 'medical',
    title: 'Medical Transportation',
    description:
      'Non-emergency medical transport available 24/7 across NJ and NY Metro Area.',
    image: 'https://images.pexels.com/photos/1386484/pexels-photo-1386484.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services#medical',
  },
  {
    id: 'charter',
    title: 'Private Charters',
    description:
      'Motor coach transportation for groups, from local transfers to cross-country trips.',
    image: 'https://images.pexels.com/photos/14044466/pexels-photo-14044466.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services#charter',
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mb-12 text-center">
          <h2
            className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Comprehensive transportation solutions tailored to meet the unique
            needs of schools, districts, and organizations.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 100}
              animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
            >
              <Link href={service.href} className="group block">
                <article className="overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <h3
                      className="absolute bottom-4 left-4 text-xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="mb-4 text-slate-600">{service.description}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-dzred-500 transition-colors group-hover:text-dzred-600">
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
