import { Metadata } from 'next';
import Validation from '@/components/docs/Validation';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'React Validation - NextStepjs',
  description:
    'Learn how to add validation to your React onboarding tours with NextStepjs. Create custom card components with validation logic to ensure users complete required actions before proceeding.',
  keywords: [
    ...metaKeywords,
    'react tour validation',
    'react onboarding validation',
    'react custom card validation',
    'react form validation tour',
    'react interactive tutorials',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react/validation',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/react/validation' },
};

export default function ReactValidationPage() {
  return <Validation framework="react" />;
}
