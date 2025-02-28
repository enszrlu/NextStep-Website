import { Metadata } from 'next';
import BasicSetup from '@/components/docs/BasicSetup';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'React Basic Setup - NextStepjs',
  description:
    'Learn how to set up NextStepjs in your React application. This guide covers configuration, implementation details, and best practices for integrating onboarding experiences in React projects.',
  keywords: [
    ...metaKeywords,
    'react basic setup',
    'react onboarding setup',
    'react product tour configuration',
    'react onboarding implementation',
    'react user guide setup',
    'react tutorial implementation',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react/basic-setup',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/react/basic-setup' },
};

export default function ReactBasicSetupPage() {
  return <BasicSetup framework="react" />;
}
