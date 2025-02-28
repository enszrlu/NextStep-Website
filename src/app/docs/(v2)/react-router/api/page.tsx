import { Metadata } from 'next';
import Api from '@/components/docs/Api';
import { metaKeywords } from '@/app/metaKeywords';

export const metadata: Metadata = {
  title: 'React Router API Reference - NextStepjs',
  description:
    'Comprehensive API documentation for NextStepjs in React Router applications. Learn about component props, step configuration, hooks, and navigation adapters.',
  keywords: [
    ...metaKeywords,
    'react router onboarding api',
    'react router tour api',
    'nextstepjs props',
    'nextstepjs hooks',
    'nextstepjs step configuration',
    'nextstepjs navigation adapter',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router/api',
  },
};

export default function ReactRouterApiPage() {
  return <Api framework="react router" />;
}
