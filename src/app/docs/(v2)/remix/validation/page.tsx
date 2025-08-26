import { Metadata } from 'next';
import Validation from '@/components/docs/Validation';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Remix Validation - NextStepjs',
  description:
    'Learn how to add validation to your Remix onboarding tours with NextStepjs. Create custom card components with validation logic to ensure users complete required actions before proceeding.',
  keywords: [
    ...metaKeywords,
    'remix tour validation',
    'remix onboarding validation',
    'remix custom card validation',
    'remix form validation tour',
    'remix interactive tutorials',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix/validation',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/remix/validation' },
};

export default function RemixValidationPage() {
  return <Validation framework="remix" />;
}
