import { Metadata } from 'next';
import UseNextStepHook from '@/components/docs/UseNextStepHook';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'React useNextStep Hook - NextStepjs',
  description:
    'Learn how to use the useNextStep hook to control tours programmatically in your React application. This guide covers all available methods and practical examples.',
  keywords: [
    ...metaKeywords,
    'react useNextStep hook',
    'react onboarding control',
    'react programmatic tours',
    'react tour control',
    'react hook documentation',
    'react tour api',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react/useNextStep',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/react/useNextStep' },
};

export default function ReactUseNextStepPage() {
  return <UseNextStepHook framework="react" />;
}
