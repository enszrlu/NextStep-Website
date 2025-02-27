import { Metadata } from 'next';
import Api from '@/components/docs/Api';
import { metaKeywords } from '@/app/layout';

export const metadata: Metadata = {
  title: 'React API Reference - NextStepjs',
  description:
    'Comprehensive API documentation for NextStepjs in React applications. Learn about component props, step configuration, hooks, and navigation adapters.',
  keywords: [
    ...metaKeywords,
    'react onboarding api',
    'react tour api',
    'nextstepjs props',
    'nextstepjs hooks',
    'nextstepjs step configuration',
    'nextstepjs navigation adapter',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react/api',
  },
};

export default function ReactApiPage() {
  return <Api framework="react" />;
}
