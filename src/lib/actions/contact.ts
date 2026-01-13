'use server';

import { contactSchema } from '@/lib/schemas';

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

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Parse form data
  const rawData = {
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  };

  // Validate with Zod
  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return {
      success: false,
      message: 'Please correct the errors below.',
      errors: {
        firstName: errors.firstName,
        lastName: errors.lastName,
        email: errors.email,
        phone: errors.phone,
        subject: errors.subject,
        message: errors.message,
      },
    };
  }

  // TODO: Add rate limiting with Upstash
  // TODO: Submit to OrbioCloud leads API or email service

  // For now, simulate successful submission
  // In production, this would send to your backend/email service
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log for development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Contact form submission:', result.data);
    }

    return {
      success: true,
      message:
        'Thank you for your message! We will get back to you within 24 hours.',
    };
  } catch {
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    };
  }
}
