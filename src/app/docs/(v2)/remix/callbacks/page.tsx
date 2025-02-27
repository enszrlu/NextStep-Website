import { Metadata } from 'next';
import Callbacks from '@/components/docs/Callbacks';
import { metaKeywords } from '@/app/layout';

export const metadata: Metadata = {
  title: 'Remix Callbacks - NextStepjs',
  description:
    'Learn how to use callbacks in NextStepjs to create interactive and dynamic tours in your Remix application. Track user progress with onStart, onComplete, onSkip, and onStepChange callbacks.',
  keywords: [
    ...metaKeywords,
    'remix callbacks',
    'remix tour events',
    'remix onboarding events',
    'remix tour tracking',
    'remix tour analytics',
    'remix onComplete callback',
    'remix onStart callback',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/remix/callbacks',
  },
};

export default function RemixCallbacksPage() {
  return <Callbacks framework="remix" />;
}
