'use client';

import { useActionState } from 'react';
import { submitContactForm } from '@/lib/actions/contact';

interface FormState {
  success: boolean;
  message: string;
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    phone?: string[];
    subject?: string[];
    message?: string[];
  };
}

const initialState: FormState = {
  success: false,
  message: '',
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg bg-green-50 p-6 text-center"
      >
        <svg
          className="mx-auto mb-4 h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mb-2 text-lg font-semibold text-green-800">
          Message Sent!
        </h3>
        <p className="text-green-700">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.message && !state.success && (
        <div
          role="alert"
          className="rounded-lg bg-red-50 p-4 text-sm text-red-700"
        >
          {state.message}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            aria-describedby={
              state.errors?.firstName ? 'firstName-error' : undefined
            }
            aria-invalid={state.errors?.firstName ? true : undefined}
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 transition-colors focus:border-dzred-500 focus:outline-none focus:ring-1 focus:ring-dzred-500"
            placeholder="John"
          />
          {state.errors?.firstName && (
            <p
              id="firstName-error"
              className="mt-1 text-sm text-red-600"
            >
              {state.errors.firstName[0]}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            aria-describedby={
              state.errors?.lastName ? 'lastName-error' : undefined
            }
            aria-invalid={state.errors?.lastName ? true : undefined}
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 transition-colors focus:border-dzred-500 focus:outline-none focus:ring-1 focus:ring-dzred-500"
            placeholder="Doe"
          />
          {state.errors?.lastName && (
            <p
              id="lastName-error"
              className="mt-1 text-sm text-red-600"
            >
              {state.errors.lastName[0]}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-describedby={state.errors?.email ? 'email-error' : undefined}
            aria-invalid={state.errors?.email ? true : undefined}
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 transition-colors focus:border-dzred-500 focus:outline-none focus:ring-1 focus:ring-dzred-500"
            placeholder="john@example.com"
          />
          {state.errors?.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {state.errors.email[0]}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            aria-describedby={state.errors?.phone ? 'phone-error' : undefined}
            aria-invalid={state.errors?.phone ? true : undefined}
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 transition-colors focus:border-dzred-500 focus:outline-none focus:ring-1 focus:ring-dzred-500"
            placeholder="(555) 123-4567"
          />
          {state.errors?.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600">
              {state.errors.phone[0]}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          aria-describedby={state.errors?.subject ? 'subject-error' : undefined}
          aria-invalid={state.errors?.subject ? true : undefined}
          className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 transition-colors focus:border-dzred-500 focus:outline-none focus:ring-1 focus:ring-dzred-500"
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="services">Services Information</option>
          <option value="quote">Request a Quote</option>
          <option value="charter">Charter Bus Inquiry</option>
          <option value="consulting">Consulting Services</option>
          <option value="other">Other</option>
        </select>
        {state.errors?.subject && (
          <p id="subject-error" className="mt-1 text-sm text-red-600">
            {state.errors.subject[0]}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
          aria-invalid={state.errors?.message ? true : undefined}
          className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 transition-colors focus:border-dzred-500 focus:outline-none focus:ring-1 focus:ring-dzred-500"
          placeholder="How can we help you?"
        />
        {state.errors?.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-dzred-500 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-dzred-600 focus:outline-none focus:ring-2 focus:ring-dzred-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
