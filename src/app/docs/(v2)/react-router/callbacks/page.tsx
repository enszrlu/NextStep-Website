import { Metadata } from 'next';
import Callbacks from '@/components/docs/Callbacks';
import { metaKeywords } from '@/app/layout';

export const metadata: Metadata = {
  title: 'React Router Callbacks - NextStepjs',
  description:
    'Learn how to use callbacks in NextStepjs to create interactive and dynamic tours in your React Router application. Track user progress with onStart, onComplete, onSkip, and onStepChange callbacks.',
  keywords: [
    ...metaKeywords,
    'react router callbacks',
    'react router tour events',
    'react router onboarding events',
    'react router tour tracking',
    'react router tour analytics',
    'react router onComplete callback',
    'react router onStart callback',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router/callbacks',
  },
};

export default function ReactRouterCallbacksPage() {
  return <Callbacks framework="react router" />;
}
