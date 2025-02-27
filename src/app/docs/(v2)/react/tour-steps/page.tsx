import { Metadata } from 'next';
import TourSteps from '@/components/docs/TourSteps';
import { metaKeywords } from '@/app/layout';

export const metadata: Metadata = {
  title: 'React Tour Steps - NextStepjs',
  description:
    'Learn how to create tour steps for your React application. This guide covers step configuration, targeting elements, and creating interactive tours in your React projects.',
  keywords: [
    ...metaKeywords,
    'react tour steps',
    'react onboarding steps',
    'react product tour configuration',
    'react interactive tutorials',
    'react step configuration',
    'react tour targeting',
  ],
  alternates: {
    canonical: 'https://nextstepjs.com/docs/react/tour-steps',
  },
};

export default function ReactTourStepsPage() {
  return <TourSteps framework="react" />;
}
