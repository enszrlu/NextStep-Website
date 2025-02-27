import { Metadata } from 'next';
import UseNextStepHook from '@/components/docs/UseNextStepHook';
import { metaKeywords } from '@/app/layout';

export const metadata: Metadata = {
  title: 'React Router useNextStep Hook - NextStepjs',
  description:
    'Learn how to use the useNextStep hook to control tours programmatically in your React Router application. This guide covers all available methods and practical examples.',
  keywords: [
    ...metaKeywords,
    'react router useNextStep hook',
    'react router onboarding control',
    'react router programmatic tours',
    'react router tour control',
    'react router hook documentation',
    'react router tour api',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router/useNextStep',
  },
};

export default function ReactRouterUseNextStepPage() {
  return <UseNextStepHook framework="react router" />;
}
