import { Metadata } from 'next';
import Callbacks from '@/components/docs/Callbacks';
import { metaKeywords } from '@/app/metaKeywords';

export const metadata: Metadata = {
  title: 'React Callbacks - NextStepjs',
  description:
    'Learn how to use callbacks in NextStepjs to create interactive and dynamic tours in your React application. Track user progress with onStart, onComplete, onSkip, and onStepChange callbacks.',
  keywords: [
    ...metaKeywords,
    'react callbacks',
    'react tour events',
    'react onboarding events',
    'react tour tracking',
    'react tour analytics',
    'react onComplete callback',
    'react onStart callback',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react/callbacks',
  },
};

export default function ReactCallbacksPage() {
  return <Callbacks framework="react" />;
}
