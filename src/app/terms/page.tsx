import type { Metadata } from 'next';
import { FadeIn } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'DZS Transport terms of service and conditions of use.',
};

export default function TermsPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <h1
            className="mb-8 text-4xl font-bold text-slate-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Terms of Service
          </h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600">
              Last updated: January 2024
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the DZS Transport website, you accept and
              agree to be bound by these Terms of Service. If you do not agree
              to these terms, please do not use our website.
            </p>

            <h2>Use of Website</h2>
            <p>
              You may use our website for lawful purposes only. You agree not
              to:
            </p>
            <ul>
              <li>Use the website in any way that violates applicable laws</li>
              <li>Attempt to interfere with the proper functioning of the website</li>
              <li>Use automated systems to access the website without permission</li>
              <li>Collect or harvest any information from the website</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and
              images, is the property of DZS Transport and is protected by
              copyright and other intellectual property laws.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The information on this website is provided &quot;as is&quot; without
              warranties of any kind. DZS Transport does not warrant that the
              website will be error-free or uninterrupted.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              DZS Transport shall not be liable for any indirect, incidental,
              special, or consequential damages arising from your use of the
              website.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting to the website.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at{' '}
              <a
                href="mailto:info@dzstransport.com"
                className="text-dzred-500 hover:text-dzred-600"
              >
                info@dzstransport.com
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
