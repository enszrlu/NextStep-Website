import { Metadata } from 'next';
import BasicSetup from '@/components/docs/BasicSetup';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'React Router Basic Setup - NextStepjs',
  description:
    'Learn how to set up NextStepjs with React Router. This guide covers integration with React Router, navigation adapters, Vite configuration, and best practices for implementing onboarding experiences in React Router applications.',
  keywords: [
    ...metaKeywords,
    'react router basic setup',
    'react router onboarding setup',
    'react router product tour',
    'react router navigation adapter',
    'react router onboarding implementation',
    'vite react router configuration',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router/basic-setup',
  },
  openGraph: {
    ...openGraph,
    url: 'https://nextstepjs.com/docs/react-router/basic-setup',
  },
};

export default function ReactRouterBasicSetupPage() {
  return <BasicSetup framework="react router" />;
}
