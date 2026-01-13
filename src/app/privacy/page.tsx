import type { Metadata } from 'next';
import { FadeIn } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'DZS Transport privacy policy and data handling practices.',
};

export default function PrivacyPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <h1
            className="mb-8 text-4xl font-bold text-slate-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Privacy Policy
          </h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600">
              Last updated: January 2024
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when
              you fill out a contact form, request a quote, or communicate with
              us.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and requests</li>
              <li>Provide, maintain, and improve our services</li>
              <li>
                Send you technical notices, updates, and administrative messages
              </li>
              <li>
                Communicate with you about services, offers, and events
              </li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties except as described in this policy.
              We may share your information with trusted third parties who
              assist us in operating our website and conducting our business.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information. However, no method of transmission over the
              Internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
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
