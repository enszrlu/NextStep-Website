import { Metadata } from 'next';
import Animations from '@/components/docs/Animations';
import { metaKeywords } from '@/app/metaKeywords';

export const metadata: Metadata = {
  title: 'React Router Animations - NextStepjs',
  description:
    'Learn how to customize animations in your React Router onboarding tours with NextStepjs. Control transition timing, easing, and create custom animated cards using Framer Motion.',
  keywords: [
    ...metaKeywords,
    'react router tour animations',
    'react router onboarding transitions',
    'react router framer motion',
    'react router custom animations',
    'react router animated cards',
    'react router smooth transitions',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router/animations',
  },
};

export default function ReactRouterAnimationsPage() {
  return <Animations framework="react router" />;
}
