import { Metadata } from 'next';
import UseNextStepHook from '@/components/docs/UseNextStepHook';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Remix useNextStep Hook - NextStepjs',
  description:
    'Learn how to use the useNextStep hook to control tours programmatically in your Remix application. This guide covers all available methods and practical examples.',
  keywords: [
    ...metaKeywords,
    'remix useNextStep hook',
    'remix onboarding control',
    'remix programmatic tours',
    'remix tour control',
    'remix hook documentation',
    'remix tour api',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix/useNextStep',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/remix/useNextStep' },
};

export default function RemixUseNextStepPage() {
  return <UseNextStepHook framework="remix" />;
}
