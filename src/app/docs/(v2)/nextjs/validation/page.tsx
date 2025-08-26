import { Metadata } from 'next';
import Validation from '@/components/docs/Validation';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Next.js Validation - NextStepjs',
  description:
    'Learn how to add validation to your Next.js onboarding tours with NextStepjs. Create custom card components with validation logic to ensure users complete required actions before proceeding.',
  keywords: [
    ...metaKeywords,
    'nextjs tour validation',
    'nextjs onboarding validation',
    'nextjs custom card validation',
    'nextjs form validation tour',
    'nextjs interactive tutorials',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs/validation',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/nextjs/validation' },
};

export default function NextjsValidationPage() {
  return <Validation framework="next.js" />;
}
