import { Metadata } from 'next';
import Validation from '@/components/docs/Validation';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'React Router Validation - NextStepjs',
  description:
    'Learn how to add validation to your React Router onboarding tours with NextStepjs. Create custom card components with validation logic to ensure users complete required actions before proceeding.',
  keywords: [
    ...metaKeywords,
    'react router tour validation',
    'react router onboarding validation',
    'react router custom card validation',
    'react router form validation tour',
    'react router interactive tutorials',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router/validation',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/react-router/validation' },
};

export default function ReactRouterValidationPage() {
  return <Validation framework="react-router" />;
}
