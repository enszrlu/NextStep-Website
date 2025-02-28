import { Metadata } from 'next';
import Callbacks from '@/components/docs/Callbacks';
import { metaKeywords } from '@/app/metaKeywords';
import { openGraph } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Next.js Callbacks - NextStepjs',
  description:
    'Learn how to use callbacks in NextStepjs to create interactive and dynamic tours in your Next.js application. Track user progress with onStart, onComplete, onSkip, and onStepChange callbacks.',
  keywords: [
    ...metaKeywords,
    'nextjs callbacks',
    'nextjs tour events',
    'nextjs onboarding events',
    'nextjs tour tracking',
    'nextjs tour analytics',
    'nextjs onComplete callback',
    'nextjs onStart callback',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/nextjs/callbacks',
  },
  openGraph: { ...openGraph, url: 'https://nextstepjs.com/docs/nextjs/callbacks' },
};

export default function NextjsCallbacksPage() {
  return <Callbacks framework="next.js" />;
}
