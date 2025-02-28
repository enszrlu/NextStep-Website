import { Metadata } from 'next';
import TourSteps from '@/components/docs/TourSteps';
import { metaKeywords } from '@/app/metaKeywords';

export const metadata: Metadata = {
  title: 'React Router Tour Steps - NextStepjs',
  description:
    'Learn how to create tour steps for your React Router application. This guide covers step configuration, targeting elements, and creating interactive tours in your React Router projects.',
  keywords: [
    ...metaKeywords,
    'react router tour steps',
    'react router onboarding steps',
    'react router product tour configuration',
    'react router interactive tutorials',
    'react router step configuration',
    'react router tour targeting',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react-router/tour-steps',
  },
};

export default function ReactRouterTourStepsPage() {
  return <TourSteps framework="react router" />;
}
